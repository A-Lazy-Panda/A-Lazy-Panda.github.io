#!/usr/bin/env bash
# Rebuild the site and publish it to https://a-lazy-panda.github.io
set -e
cd "$(dirname "$0")"
npm install --no-audit --no-fund
npm run build
cd dist
touch .nojekyll
rm -rf .git
git init -q && git checkout -q -b gh-pages
git add -A && git commit -q -m "Deploy $(date +%F_%H:%M)"
git push -f https://github.com/A-Lazy-Panda/a-lazy-panda.github.io.git gh-pages
echo "Live: https://a-lazy-panda.github.io"
