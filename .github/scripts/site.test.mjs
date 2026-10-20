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

test('stack capability map describes each product and matches its WebPage schema', () => {
    const source = read('stack/index.html');
    const map = source.match(/<section\b[^>]*id="capability-map"[\s\S]*?<\/section>/)?.[0];
    assert.ok(map, 'Missing capability map');
    const rows = [...map.matchAll(/<tr>\s*<th scope="row">([^<]+)<\/th>\s*<td>(.*?)<\/td>/gs)];
    const products = ['Chronicle', 'Arc', 'Components', 'Fundamentals', 'CLI', 'Studio', 'Screenplay', 'Prologue'];
    assert.deepEqual(rows.map(row => row[1]), products);
    const blocks = [...source.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    const page = blocks.map(block => JSON.parse(block[1])).find(block => block['@type'] === 'WebPage');
    assert.equal(page?.url, 'https://cratis.no/stack/');
    assert.equal(page.mainEntity['@type'], 'ItemList');
    assert.deepEqual(page.mainEntity.itemListElement.map(entry => entry.item.name), products);
    rows.forEach((row, index) => {
        const entry = page.mainEntity.itemListElement[index];
        assert.equal(entry.position, index + 1);
        assert.equal(entry.item.description, row[2].replace(/<[^>]+>/g, ''));
        assert.equal(entry.item.url, `https://www.cratis.io/${products[index].toLowerCase()}/`);
    });
    for (const path of ['chronicle', 'arc/backend', 'arc/frontend', 'components', 'fundamentals', 'cli', 'studio', 'screenplay', 'prologue']) {
        assert.ok(map.includes(`href="https://www.cratis.io/${path}/"`), `Missing ${path} docs`);
    }
});

test('stack map keeps client and model-first maturity boundaries visible', () => {
    const source = read('stack/index.html');
    const map = source.match(/<section\b[^>]*id="capability-map"[\s\S]*?<\/section>/)[0];
    for (const language of ['dotnet', 'typescript', 'kotlin', 'elixir', 'go', 'python']) {
        assert.ok(map.includes(`href="https://www.cratis.io/event-sourcing/${language}/"`), `Missing ${language} client`);
    }
    assert.match(map, /Kotlin \/ Java/);
    assert.match(map, /Go \(experimental\)/);
    assert.match(map, /Python \(pre-alpha, not published\)/);
    assert.match(map, /<th scope="row">Arc<\/th>[\s\S]*?<td>Released; TypeScript backend in source preview<\/td>/);
    assert.match(map, /<th scope="row">Studio<\/th>[\s\S]*?<td>Preview · paid product<\/td>/);
    for (const product of ['Screenplay', 'Prologue']) {
        assert.match(map, new RegExp(`<th scope="row">${product}</th>\\s*<td>.*?</td>\\s*<td>Experimental</td>`));
    }
});

test('Stack and Support stay discoverable in public navigation and the home footer', () => {
    const paths = [...read('sitemap.xml').matchAll(/<loc>https:\/\/cratis\.no(\/[^<]*)<\/loc>/g)];
    assert.ok(paths.length > 0);
    for (const [, path] of paths) {
        const source = read(`${path.slice(1)}index.html`);
        for (const pattern of [/<nav class="site-nav"[\s\S]*?<\/nav>/, /<nav class="mobile-nav"[\s\S]*?<\/nav>/]) {
            const navigation = source.match(pattern)?.[0];
            assert.ok(navigation, `${path}: missing navigation`);
            for (const destination of ['/stack/', '/support/']) {
                assert.ok(navigation.includes(`href="${destination}"`), `${path}: missing ${destination}`);
            }
        }
    }
    const home = read('index.html');
    const footer = home.match(/<footer\b[\s\S]*?<\/footer>/)[0];
    for (const destination of ['/stack/', '/support/']) {
        assert.ok(footer.includes(`href="${destination}"`), `Home footer: missing ${destination}`);
    }
    assert.match(home, /<p class="hero-facts">[\s\S]*?href="\/support\/"[\s\S]*?<\/p>/);
    for (const source of [home, read('stack/index.html')]) {
        assert.match(source, /href="https:\/\/www\.cratis\.io\/chronicle\/get-started\/">Your first five minutes with Chronicle →<\/a>/);
    }
});

test('sitemap records per-page modification dates and resolves to public pages', () => {
    const entries = [...read('sitemap.xml').matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<\/url>/g)];
    assert.ok(entries.length > 0);
    const dates = new Map(entries.map(([, url, date]) => [url, date]));
    assert.equal(dates.size, entries.length, 'Duplicate sitemap URLs');
    for (const [url, date] of dates) {
        assert.match(date, /^\d{4}-\d{2}-\d{2}$/);
        assert.equal(new Date(date).toISOString().slice(0, 10), date);
        const page = new URL(url);
        assert.equal(page.origin, 'https://cratis.no');
        assert.ok(read(`${page.pathname.slice(1)}index.html`).includes(`href="${url}"`), `${url}: missing page or canonical`);
    }
    // These pages changed on October 20; untouched pages retain their October 19 dates.
    for (const path of ['', 'stack/', 'studio/', 'support/', 'about/']) {
        assert.equal(dates.get(`https://cratis.no/${path}`), '2026-10-20');
    }
});

test('About presents a definition-first facts block and an answer-first summary', () => {
    const source = read('about/index.html');
    const facts = source.match(/<section\b[^>]*id="facts"[\s\S]*?<\/section>/)?.[0];
    assert.ok(facts, 'Missing facts block');
    assert.match(facts, /<h2>Cratis at a glance<\/h2>/);
    const definition = 'Cratis is a set of open-source (MIT) tools for building event-sourced and CQRS applications, from the event store to the UI.';
    assert.ok(facts.includes(`<p>${definition}</p>`));
    assert.equal((facts.match(/<li>/g) || []).length, 10);
    assert.match(facts, /href="\/support\/">Cratis Assurance<\/a>/);
    const hero = source.match(/<section class="page-hero shell">[\s\S]*?<\/section>/)[0];
    assert.ok(hero.includes(definition));
    assert.match(facts, /Based in Norway/);
    for (const product of ['chronicle', 'arc', 'components', 'fundamentals', 'cli']) {
        assert.ok(facts.includes(`href="https://www.cratis.io/${product}/"`));
    }
    assert.match(facts, /License: MIT for the open-source tools/);
    assert.match(facts, /href="https:\/\/cratis\.studio\/">Studio<\/a> is a paid Preview product/);
});

test('download facts retain the approved scope, predecessors and counting date', () => {
    const facts = read('about/index.html').match(/<section\b[^>]*id="facts"[\s\S]*?<\/section>/)[0];
    assert.match(facts, /over 2\.5 million downloads<\/strong> across NuGet, npm, Docker Hub and Hex, counted October 2026/);
    assert.match(facts, /Chronicle, including its predecessors Aksio Cratis and the Dolittle Runtime: over 1\.5 million downloads/);
    assert.match(facts, /Arc, including Aksio Cratis Applications and the Dolittle SDK: over 1\.2 million downloads/);
    assert.doesNotMatch(facts, /users|installations|Fundamentals[^<]*downloads/i);
    for (const file of ['index.html', 'about/index.html']) {
        const schemas = [...read(file).matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
        schemas.forEach(([, schema]) => assert.doesNotMatch(schema, /downloads|1\.5 million|1\.2 million|2\.5 million/i));
    }
});

test('Organization founders share stable identities and match visible public profiles', () => {
    const source = read('about/index.html');
    const about = pageData('about').mainEntity;
    const home = JSON.parse(read('index.html').match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
    assert.equal(about['@id'], organization['@id']);
    assert.deepEqual(home.founder, about.founder);
    assert.equal(about.founder.length, 2);
    const expected = [
        ['einar-ingebrigtsen', 'Einar Ingebrigtsen', 'Co-founder and CTO', 'einari'],
        ['sindre-alstad-wilting', 'Sindre Alstad Wilting', 'Co-founder and Chief Architect', 'woksin']
    ];
    expected.forEach(([id, name, jobTitle, handle], index) => {
        assert.deepEqual(about.founder[index], {
            '@type': 'Person', '@id': `https://cratis.no/#${id}`, name, jobTitle,
            sameAs: [`https://github.com/${handle}`, `https://cast.cratis.io/${handle}/`]
        });
        assert.ok(source.includes(`<h3>${name}</h3>`));
        assert.ok(source.includes(`<p class="role">${jobTitle}</p>`));
        about.founder[index].sameAs.forEach(url => assert.ok(source.includes(`href="${url}"`)));
    });
});

test('Stage maturity stays experimental beside its sandbox claims', () => {
    for (const file of ['index.html', 'stack/index.html', 'stack/the-cast/index.html', 'studio/index.html']) {
        assert.match(read(file), /Stage remains experimental/, `${file}: missing Stage limitation`);
    }
    assert.match(read('studio/index.html'), /Paid Preview product/);
    assert.match(read('stack/index.html'), /operating tools are\s+optional, not prerequisites for using Chronicle or Arc/);
});

test('community help does not imply response or resolution targets', () => {
    for (const file of ['support/index.html', 'why-cratis/index.html']) {
        const source = read(file);
        assert.match(source, /best-effort/);
        assert.match(source, /without a guaranteed|rather than\s+a guaranteed/);
        assert.doesNotMatch(source, /usually faster|resolved within hours/);
    }
    assert.match(read('support/index.html'), /response targets and\s+escalation with you in a signed agreement/);
});

test('versioning distinguishes release-label checks from breaking-change detection', () => {
    const source = read('trust/index.html');
    assert.match(source, /Release-label checks do not prove that every\s+breaking change has been detected/);
    assert.match(source, /Review the release notes and\s+compatibility guidance for the product and version you use/);
    assert.doesNotMatch(source, /checked\s+automatically before anything ships|twenty changes/);
});
