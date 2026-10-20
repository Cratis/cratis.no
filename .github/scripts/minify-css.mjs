// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

// Only compact whitespace and comments; keep selector spacing, calc operators,
// custom properties and quoted content intact. No value or selector rewriting.
export function minifyCss(source) {
    const tokens = source.match(/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\/\*[\s\S]*?\*\/|\s+|[^\s"'/]+|\//g) || [];
    const result = [];
    for (const token of tokens) {
        if (token.startsWith('/*') || /^\s+$/.test(token)) {
            if (result.at(-1) !== ' ') result.push(' ');
        } else {
            result.push(token);
        }
    }
    return result.join('').trim();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    const path = process.argv[2];
    const source = readFileSync(path, 'utf8');
    const result = minifyCss(source);
    writeFileSync(path, result + '\n');
    console.log(`Minified ${path}: ${Buffer.byteLength(source)} → ${Buffer.byteLength(result) + 1} bytes`);
}
