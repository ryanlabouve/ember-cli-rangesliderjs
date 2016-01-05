#!/bin/bash
# Thanks to http://xcv.no/2014/11/29/Deploying-ember-cli-apps-and-addons-to-github-pages.html !!
git branch -D gh-pages
git push origin --delete gh-pages
git checkout -b gh-pages
ember build --environment production
git rm -rf app addon config tests
git rm -rf ember-cli-build.js bower.json package.json testem.json
git rm -rf .bowerrc .editorconfig .jshintrc .travis.yml
mv dist/* .
rm -rf dist
git add .
git commit -m "Publishing to github pages"
git push origin gh-pages
git checkout master
