#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
     CREATE ROLE ndm PASSWORD 'ndm' LOGIN;
     CREATE DATABASE ndm OWNER ndm;
     GRANT ALL ON DATABASE ndm TO ndm;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" ndm <<-EOSQL
     CREATE EXTENSION IF NOT EXISTS "hstore";
EOSQL
