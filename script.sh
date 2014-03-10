#!/bin/sh
exec /usr/bin/ssh -o StrictHostKeyChecking=no -i /Users/zhipengjiang/.ssh/id_rsa "$@"
