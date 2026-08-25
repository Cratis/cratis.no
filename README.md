# cratis.no

The Cratis company-navigation site. It is plain HTML, CSS, and progressive-enhancement JavaScript with no build step or runtime dependency.

Product documentation belongs at [cratis.io](https://cratis.io). Product source, releases, packages, issues, and repository-specific licenses remain in their owning repositories.

## Run locally

```bash
./serve            # http://localhost:4321
./serve 8080       # another port
```

Root-relative links require a local static server.

## Public routes

```text
/               Company and product navigation
/stack/         Bounded product descriptions and technical links
/why-cratis/    Evidence-first fit navigation
/support/       Commercial contact and software/responsibility boundary
/trust/         Source, license, and private vulnerability-reporting routes
/about/         Company contact and owning-surface links
```

The sitemap contains exactly these six routes. Removed routes have no replacement content in this repository.

## Deployment

GitHub Pages uses the root of `main` with the custom domain in `CNAME`. A merge to `main` can therefore replace the deployed site directly, including removal of files and routes deleted by the merge. Pull requests do not deploy the site.

## Validation

```bash
python3 tools/validate-site.py
python3 tools/validate-site.py --check-external
```

Before merge, also serve the site and review all six routes in light and dark themes, at desktop and mobile widths, with keyboard navigation, reduced motion, and JavaScript disabled.

## Content boundary

- Keep cratis.no focused on company, fit, trust, commercial contact, and product navigation.
- Keep technical behavior, setup, version profiles, and limitations on cratis.io or in the owning product repository.
- Do not infer maturity, quality, compatibility, security posture, performance, support, pricing, continuity, customer outcomes, or roadmap state from a repository, package, build, or current public copy.
- Keep the private vulnerability-reporting route factual and free of security-posture or response-time claims.
- Do not place credentials, customer or personal data, production payloads, private security evidence, internal review material, or local artifacts in this repository.
