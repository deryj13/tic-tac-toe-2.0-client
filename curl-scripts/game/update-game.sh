
curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'" ,
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

  echo
