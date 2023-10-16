npx next build

tmpdir=$(mktemp -d)
origin_remote_url=$(git remote get-url origin)

echo "Temporary Directory is $tmpdir"

mv out $tmpdir

cd $tmpdir/out

touch .nojekyll

git init
git checkout --orphan gh-pages
git add .
git commit -m "build result"
git remote add origin $origin_remote_url
git push -f -u origin gh-pages

cd -

rm -rf $tmpdir
