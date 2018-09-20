#!/bin/bash

apt-get update
apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | bash
apt-get install nodejs

npm install -g newman

apt-get update && apt-get install -y mongodb
mkdir -p data/db
mongod