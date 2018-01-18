#!/usr/bin/env bash

cd $1 && \
    ./gradlew :ndm-front:npmInstall :ndm-front:build && \
    ./gradlew :ndm-graphql:clean :ndm-graphql:shadowJar
