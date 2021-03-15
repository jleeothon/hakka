#!/usr/bin/env bash

set -eux

ls *.yaml **/*.yaml | xargs -n 300 npx prettier --write --parser yaml --prose-wrap always
