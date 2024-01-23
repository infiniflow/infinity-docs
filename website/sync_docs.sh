#!/bin/bash

set -x

cd $INFINITY_WEBSITE/website
yarn install

if [ "$1" != "dev" ]
then
  # Retrieve the last 2 versions from the main repository and save them to versions.json
  yarn run genversions

  for version in $(cat versions.json | jq -r '.[]'); do
    cd $INFINITY_WEBSITE/website
    ./sync_version.sh $version
  done
fi

cd $INFINITY_WEBSITE/website
./sync_version.sh main