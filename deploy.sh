#!/bin/bash

export USE_GH_PAGES=true
npm run build
cp 404.html dist/
npx gh-pages -d dist