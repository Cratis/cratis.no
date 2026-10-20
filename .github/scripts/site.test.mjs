// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { minifyCss } from './minify-css.mjs';

const read = path => readFileSync(path, 'utf8');
const pageData = page => JSON.parse(read(`${page}/index.html`).match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const organization = { '@id': 'https://cratis.no/#organization' };

test('CSS minification removes comments and indentation without rewriting values', () => {
    assert.equal(minifyCss('  /* heading */\n.a {\n    color: red;\n}\n'), '.a { color: red; }');
    const css = '.a :hover { width: calc(100% - 2 * var(--gutter)); --gap: 1px  2px; }';
    assert.equal(minifyCss(css), '.a :hover { width: calc(100% - 2 * var(--gutter)); --gap: 1px 2px; }');
});

test('CSS minification preserves quoted whitespace, escapes and comment-like text', () => {
    const css = String.raw`.a { content: "a  b /* text */ \\"; background: url("https://example.test/a b"); }`;
    assert.equal(minifyCss(css), css);
    assert.equal(minifyCss(".b { content: 'a  b'; }"), ".b { content: 'a  b'; }");
});

test('the deployed stylesheet is smaller and keeps local fonts with swap', () => {
    const source = read('assets/css/site.css');
    const minified = minifyCss(source);
    assert.ok(minified.length < source.length * 0.8);
    assert.equal(minifyCss(minified), minified);
    assert.equal((minified.match(/font-display: swap/g) || []).length, 3);
    assert.doesNotMatch(minified, /fonts\.googleapis\.com|fonts\.gstatic\.com/);
    for (const file of ['index.html', 'ai/index.html', 'studio/index.html', 'support/index.html', 'trust/index.html']) {
        assert.match(read(file), /rel="preload" href="\/assets\/fonts\/inter-latin\.woff2"/);
    }
});

test('home H1 contains one remembers, with no generated duplicate word', () => {
    const h1 = read('index.html').match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    assert.equal(h1, 'Software that remembers.');
    assert.doesNotMatch(read('assets/css/site.css'), /content:\s*["']remembers/);
});

test('the four page schemas share the existing site and organization identities', () => {
    for (const page of ['ai', 'studio', 'support', 'trust']) {
        const data = pageData(page);
        assert.equal(data['@type'], 'WebPage');
        assert.deepEqual(data.isPartOf, { '@id': 'https://cratis.no/#website' });
        assert.deepEqual(data.author, organization);
        assert.deepEqual(data.publisher, organization);
        assert.equal(data.breadcrumb['@type'], 'BreadcrumbList');
    }
});

test('Assurance offers contain only the named services and prices visible on the page', () => {
    const source = read('support/index.html').split('</head>')[1];
    const service = pageData('support').mainEntity;
    assert.equal(service['@type'], 'Service');
    assert.deepEqual(service.provider, organization);
    assert.equal(service.offers.length, 8);
    const cards = [...source.matchAll(/<h3>([^<]+)<\/h3>\s*<p class="who-for">([^<]+)<\/p>\s*<p class="price">([^<]+)<\/p>/g)];
    assert.ok(cards.length >= service.offers.length);
    for (const offer of service.offers) {
        const card = cards.find(([, name]) => name === offer.name);
        assert.ok(card, `Missing visible service: ${offer.name}`);
        assert.equal(offer.price, card[3] === 'Free' ? '0' : card[3].replace(/[€,]/g, ''));
        assert.equal(offer.priceCurrency, 'EUR');
        assert.equal(offer.itemOffered.description, card[2]);
    }
});

test('Studio summary is self-canonical, links to the product site and has no invented Offer', () => {
    const source = read('studio/index.html');
    const app = pageData('studio').mainEntity;
    assert.equal(app['@type'], 'SoftwareApplication');
    assert.equal(app.url, 'https://cratis.studio/');
    assert.deepEqual(app.publisher, organization);
    assert.equal(app.offers, undefined);
    assert.match(source, /rel="canonical" href="https:\/\/cratis\.no\/studio\/"/);
    assert.match(source, /property="og:url" content="https:\/\/cratis\.no\/studio\/"/);
    assert.match(source, /class="cta" href="https:\/\/cratis\.studio\/"/);
    assert.match(source, /href="https:\/\/cratis\.studio\/terms-and-conditions\.html"/);
    assert.match(source, /14-day trial/);
    assert.match(source, /Public sign-up is not open yet/);
    assert.doesNotMatch(source, /trial terms are not published|Pricing and trial terms are not published/);
});
