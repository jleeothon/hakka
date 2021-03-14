#!/usr/bin/env fish
yq eval $argv (git rev-parse --show-toplevel)/word-list.yaml
