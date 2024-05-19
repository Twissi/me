#!/bin/bash

NOW=$(date +"%Y-%m-%d")
WEBSITE=$(echo "$1" | sed -E 's/^\s*.*:\/\///g')
FILE="./src/images/${WEBSITE}_${NOW}.jpg"

echo "Capture screenshot $1 as $FILE"
# https://github.com/sindresorhus/capture-website-cli
capture-website "$1" --output="$FILE" --type=jpeg

