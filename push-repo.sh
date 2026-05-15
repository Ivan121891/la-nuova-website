#!/bin/bash
cd /root/la-nuova || exit 1

# Clean old git
rm -rf .git

# Init fresh
git init
git add -A
git commit -m "initial: La Nuova website"

# Read token from git-credentials
TOKEN=$(cat ~/.git-credentials | sed 's|https://[^:]*:\([^@]*\)@.*|\1|')

# Create repo via API
curl -s -X POST "https://api.github.com/user/repos" \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name":"la-nuova-website","description":"La Nuova - Skokie, IL","private":false,"auto_init":false}' | jq -r '.full_name // .message // .errors[0].message'"

# Push
git remote add origin "https://Ivan121791:$TOKEN@github.com/Ivan121891/la-nuova-website.git"
git push -u origin main 2>&1

echo "Done"
