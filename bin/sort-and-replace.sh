#!/usr/bin/env bash
set -eux
WORD_LIST=word-list.yaml
T=$(mktemp)
node bin/sort.js < "$WORD_LIST" > "$T"
mv "$T" "$WORD_LIST"