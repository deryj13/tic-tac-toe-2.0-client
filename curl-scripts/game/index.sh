#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \

echo
