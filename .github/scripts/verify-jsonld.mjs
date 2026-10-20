// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

function verify(files, read, requiredPages) {
    assert.ok(files.length > 0, 'No tracked HTML files found');
    let blocks = 0;
    const required = new Set(requiredPages);
    for (const file of files) {
        const scripts = [...read(file).matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
        if (required.has(file)) {
            assert.ok(scripts.length > 0, `${file}: missing JSON-LD`);
            required.delete(file);
        }
        for (const [, json] of scripts) {
            const data = JSON.parse(json);
            assert.equal(data?.['@context'], 'https://schema.org', `${file}: unexpected context`);
            blocks++;
        }
    }
    assert.equal(required.size, 0, `Missing pages: ${[...required].join(', ')}`);
    assert.ok(blocks > 0, 'No JSON-LD blocks found');
    return blocks;
}

if (process.argv.includes('--self-test')) {
    const valid = '<script type="application/ld+json">{"@context":"https://schema.org"}</script>';
    assert.equal(verify(['page.html'], () => valid, ['page.html']), 1);
    assert.throws(() => verify(['page.html'], () => '<script type="application/ld+json">{broken}</script>', []));
    assert.throws(() => verify(['page.html'], () => '', ['page.html']));
    assert.throws(() => verify([], () => valid, []));
    assert.throws(() => verify(['page.html'], () => valid, ['missing.html']));
    console.log('JSON-LD self-test: 1 valid fixture and 4 rejection cases passed.');
} else {
    try {
        const files = execFileSync('git', ['ls-files', '-z', '--', '*.html'], { encoding: 'utf8' }).split('\0').filter(Boolean);
        const blocks = verify(files, file => readFileSync(file, 'utf8'), ['ai/index.html', 'studio/index.html', 'support/index.html', 'trust/index.html']);
        console.log(`Parsed ${blocks} JSON-LD blocks across ${files.length} HTML files; all four required pages covered.`);
    } catch (error) {
        console.error(error.message);
        process.exitCode = error instanceof assert.AssertionError || error instanceof SyntaxError ? 1 : 2;
    }
}
