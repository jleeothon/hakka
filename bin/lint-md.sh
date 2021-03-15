#!/usr/bin/env bash

set -eux

ls *.md **/*.md | xargs -n 300 npx prettier --write --parser markdown
