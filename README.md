# lambda-node

```bash

docker build -t lambda-node .

docker run -p 9000:8080 lambda-node

curl -X GET --url http://localhost:9000/2015-03-31/functions/function/invocation --header 'Content-Type: application/json' --data '{}'

´´´