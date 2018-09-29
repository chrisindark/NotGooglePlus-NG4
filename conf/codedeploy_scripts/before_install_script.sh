#!/bin/bash
script_dir='/home/christopher/MyStuff/NotGooglePlus-NG4'
mkdir -p $script_dir
cd $script_dir

sudo rm -rf /home/christopher/MyStuff/NotGooglePlus-NG4/dist

if [ -d ".git" ]
then
    git pull origin master --no-edit
else
    git clone https://github.com/chrisindark/NotGooglePlus-NG4.git -b master .
    npm install
fi
