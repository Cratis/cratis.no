#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/../.."

# Keep this allowlist and the Pages workflow's push paths in sync.
public_paths=(
    index.html 404.html
    about/ ai/ stack/ studio/ support/ trust/ why-cratis/ writing/
    assets/ .well-known/
    robots.txt sitemap.xml llms.txt llms-full.txt favicon.ico CNAME
)

for path in index.html CNAME robots.txt sitemap.xml 404.html; do
    if [[ ! -f "$path" ]]; then
        echo "Required public file is missing: $path" >&2
        exit 1
    fi
done

# Refuse existing output rather than risking stale or private files in the artifact.
mkdir _site

# Only tracked files under the public allowlist belong in the deployment.
git ls-files -z -- "${public_paths[@]}" | while IFS= read -r -d '' path; do
    mkdir -p "_site/$(dirname "$path")"
    cp "$path" "_site/$path"
done

# No public file uses Jekyll processing. The allowlist replaces _config.yml's
# include/exclude rules, including the explicit .well-known inclusion.
touch _site/.nojekyll
printf 'Staged public files in _site/\n'
