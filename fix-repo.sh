cd /root/la-nuova
rm -rf .vite
git rm -r .vite 2>/dev/null
git add -A
git commit -m "Remove .vite cache"
git push
echo "PUSHED"
