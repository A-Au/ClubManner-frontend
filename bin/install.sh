#!/bin/bash

rm -rf /var/www/clubmanner.com/mock

mkdir -p /var/www/clubmanner.com/mock/a/css
mkdir -p /var/www/clubmanner.com/mock/a/js
mkdir -p /var/www/clubmanner.com/mock/a/fonts

cp -r mock/* /var/www/clubmanner.com/mock
