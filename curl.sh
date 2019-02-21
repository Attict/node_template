if [ "$1" = "create"]; then
  curl \
    -X POST \
    -d '{"username":"test","password":"pass","firstName":"Mr","lastName":"T"}' \
    localhost:3000/users
elif [ "$1" = "all" ]; then
  curl \
    -X GET \
    localhost:3000/users
elif [ "$1" = "id" ]; then
  curl \
    -X GET
    localhost:3000/users/$2
fi
