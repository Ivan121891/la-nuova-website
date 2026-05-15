#!/bin/bash
set -e
cd /root/la-nuova
npm run build

TMP=$(mktemp -d)
cp -r dist/* "$TMP/"
echo "lanuovaskokie.com" > "$TMP/CNAME"
touch "$TMP/.nojekyll"

cd "$TMP"
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy to GitHub Pages"

git remote add origin https://github.com/Ivan121891/la-nuova-website.git
git push origin gh-pages --force

rm -rf "$TMP"
echo "Done"
