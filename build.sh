#!/bin/bash

if [ $# -eq 0 ]
  then
    echo "Tag is required"
    exit 1;
fi

export TAG=$1
docker-compose -f ./docker-compose.yml build
