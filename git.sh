#!/bin/bash

# Add all changes to staging area
git add .

# Prompt for commit message and commit changes
# shellcheck disable=SC2162
read -p "Enter commit message: " message
git commit -m "$message"

# Check for errors after the commit
# shellcheck disable=SC2181
if [ $? -ne 0 ]; then
  echo "Error: Commit failed. Please fix the error and try again."
  exit 1
fi

# check if there are any uncommitted changes
if [[ $(git status --porcelain) ]]; then
  echo "There are uncommitted changes"
  git add .
  git commit -m "$message"
else
  echo "All changes have been committed"
fi

# Pull changes from remote branch
# shellcheck disable=SC2162
read -p "Enter branch name to pull changes from: " branch
git pull origin "$branch"

# Check for conflicts after the pull
if [[ $(git status --porcelain) == *"U"* ]]; then
  echo "Error: There are conflicts after the pull. Please fix the conflicts and try again."
  exit 1
fi

# Get the name of the current branch
current_branch=$(git symbolic-ref --short HEAD)

# Check if the upstream branch is set
if [ -z "$(git rev-parse --symbolic-full-name --abbrev-ref '@{upstream}' 2> /dev/null)" ]; then
    echo "The upstream branch is not set for the current branch ($current_branch)."
    # shellcheck disable=SC2162
    read -p "Do you want to set the upstream branch? (y/n) " set_upstream

    if [ "$set_upstream" = "y" ]; then
        # Set the upstream branch
        # shellcheck disable=SC2086
        git push -u origin $current_branch
    else
        echo "Upstream branch not set. Exiting..."
        exit 1
    fi
fi

# Push changes to the upstream branch
git push
