#!/bin/bash

rm -rf -- !(deploy.sh)

tar -xzf package.tgz
rm package.tgz

rm archive/deploy.sh

mv -f archive/* ./
mv -f archive/.* ./

rm -rf archive
