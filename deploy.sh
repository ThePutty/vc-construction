#!/bin/bash

echo "Running deploy.sh"
npm run build
echo "installing gh-pages"
npm install --save-dev gh-pages
echo "Deploying React app to GitHub Pages"
npm run deploy -- -m "Deploy React app to GitHub Pages"