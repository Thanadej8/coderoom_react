#!/usr/bin/env bash
set -e
set -x

export NODE_ENV="${NODE_ENV:-development}"

mkdir -p /run/nginx
mkdir -p $ROOT/logs/nginx
nginx -g 'daemon off;' -c $ROOT/src/nginx.conf
