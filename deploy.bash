echo "WARNING: This script will force-push to origin/gh-pages."
echo "Proceed? (Enter to continue / [Ctrl+C] to abort):"
read

npx next build

tmpdir=$(mktemp -d)
origin_remote_url=$(git remote get-url origin)

echo "Temporary Directory is $tmpdir"

mv out $tmpdir

cd $tmpdir/out

# workaround for https://github.com/vercel/next.js/issues/56687
HTML_FILES=$(find . -type f -name '*.html')
for f in $HTML_FILES
do
	echo "Fixing manifest path: $f"
    sed -i 's/\/manifest.webmanifest/\/convert-distance-unit\/manifest.webmanifest/g' $f
done

touch .nojekyll

git init
git checkout --orphan gh-pages
git add .
git commit -m "build result"
git remote add origin $origin_remote_url
git push -f -u origin gh-pages

cd -

rm -rf $tmpdir
