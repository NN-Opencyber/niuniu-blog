#!/bin/bash
# Build and deploy to GitHub Pages

# Build
npm run build

# Navigate to dist
cd dist

# Create .nojekyll
touch .nojekyll

# Init git
git init
git checkout -b gh-pages

# Add and commit
git add -A
git commit -m 'deploy'

# Get origin URL
originUrl=$(git -C .. remote get-url origin)

# Add remote and push
git remote add origin $originUrl
git push -f origin gh-pages

# Back to root
cd ..

echo "Deploy complete!"
