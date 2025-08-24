#!/bin/bash

# Make the script executable with: chmod +x clean-git-history.sh

# Completely remove .next directory from Git history
git filter-branch --force --index-filter \
  "git rm -rf --cached --ignore-unmatch .next" \
  --prune-empty --tag-name-filter cat -- --all

# Clean up the repository
git for-each-ref --format="delete %(refname)" refs/original/ | git update-ref --stdin
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo "Git history cleaned. You can now force push with: git push -f sfb main"
