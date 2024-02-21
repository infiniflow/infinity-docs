#!/bin/bash

set -x

version=$1

# 默认不变更分支，直接操作
if [[ ! -z "$version" ]]
then
  echo $version
  cd $INFINITY_MAIN
  git checkout $version
fi

prefixPath="docs"
if [[ ! -z "$version" && "$version" != "main" ]]
then
  cd $INFINITY_WEBSITE/website
  prefixPath="versioned_docs/version-$version"
  cp ./versioned_sidebars/default.json ./versioned_sidebars/version-$version-sidebars.json
fi

cd $INFINITY_WEBSITE/website
rm -rf ./$prefixPath
mkdir -p ./$prefixPath
rsync -avh --delete $INFINITY_MAIN/docs/ $INFINITY_WEBSITE/website/$prefixPath/
node ./scripts/flaturl ./$prefixPath ./$prefixPath
# cp -r variables ./$prefixPath/variables
# rsync -avh --delete $INFINITY_MAIN/docs/variable.json $INFINITY_WEBSITE/website/$prefixPath/variables/variable.json
# rsync -avh --delete $INFINITY_MAIN/docs/fragments/ $INFINITY_WEBSITE/website/$prefixPath/fragments
