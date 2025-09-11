#!/bin/bash

npm run build
cp 404.html dist/
npx gh-pages -d dist