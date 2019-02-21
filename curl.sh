#!/bin/sh

if [ "$1" = "create" ]; then
 curl \
   -X POST \
   -H 'Content-Type: application/json' \
   -d '{"username":"test","password":"pass","firstName":"Mr","lastName":"T"}' \
   localhost:3000/users
elif [ "$1" = "all" ]; then
  curl \
    -X GET \
    localhost:3000/users
elif [ "$1" = "id" ]; then
  curl \
    -X GET \
    localhost:3000/users/$2
fi
exit 0;
