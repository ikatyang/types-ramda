#!/bin/bash

yarn run build -- --kind
yarn run build -- --kind selectable
yarn run build -- --kind placeholder

COMMITTER_NAME="$(git log -1 $TRAVIS_COMMIT --pretty="%aN")"
COMMITTER_EMAIL="$(git log -1 $TRAVIS_COMMIT --pretty="%cE")"

git config --global user.name "$COMMITTER_NAME"
git config --global user.email "$COMMITTER_EMAIL"
git config --global push.default simple

function deploy_branch() {
  local branch_name=$1

  git clone --depth=1 --branch "$branch_name" "https://github.com/$TRAVIS_REPO_SLUG.git" ./$branch_name

  rm -rf ./$branch_name/*
  cp -rf ./package.json ./README.md ./CHANGELOG.md ./LICENSE ./ramda/$branch_name/* ./$branch_name

  cd ./$branch_name

  git add --all
  git commit -m "deploy($branch_name): $TRAVIS_COMMIT"
  git push -qf "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"

  cd ..
}

deploy_branch "dist"
deploy_branch "dist-simple"
deploy_branch "dist-selectable"
deploy_branch "dist-placeholder"
