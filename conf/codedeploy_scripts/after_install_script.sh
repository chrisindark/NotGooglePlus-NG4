#!/bin/bash
script_dir='/home/christopher/MyStuff/NotGooglePlus-NG4'
cd $script_dir

# git
git pull origin master --no-edit

# Install dependencies
npm install

# Manager commands
npm run build --prod
