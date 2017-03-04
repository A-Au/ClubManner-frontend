#!/bin/bash

rm -rf /var/www/html/mock

mkdir -p /var/www/html/mock

cp -r mock/* /var/www/html/mock
