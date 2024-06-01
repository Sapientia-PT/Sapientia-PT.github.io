ng build --configuration production
mkdir docs
mv dist/website/* docs/
git add .
git commit -m "Deploy to Github Pages"
git push