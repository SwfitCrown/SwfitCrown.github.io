# Please run in the project folder
echo "Run export"
npm run export
cd ./docs
touch .nojekyll
cd ..

echo "Git push"
git add .
git commit -m "update contents"
git push
