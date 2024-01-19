#!/bin/bash

set -x

cd $INFINITY_WEBSITE/website
yarn install

if [ "$1" != "dev" ]
then
  yarn run genversions

  for version in $(cat versions.json | jq -r '.[]'); do
    cd $INFINITY_WEBSITE/website
    ./sync_version.sh $version
  done
fi

cd $TAICHI_WEBSITE/website
./sync_version.sh master