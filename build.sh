#!/bin/bash
echo "Let's build this project 😃"
echo " - Reviewing if the linter has something to say 🤓"
yarn eslint src
yarn eslint test
echo " - Time to see if your tests pass ✅"
yarn test
echo " - Let's prepare the code for distribution 🗜"
yarn webpack