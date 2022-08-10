# smtp-basic-service

build docker
docker build . -t acrwebdev/smtp-basic-service

docker push
docker push acrwebdev/smtp-basic-service

docker pull
docker pull acrwebdev/smtp-basic-service:latest

run docker
docker run -p 16000:16000 --env SERVER_IP=35.234.42.100 --env SERVER_PORT=16000 --env SWAGGER_IP=35.234.42.100 --restart=always --name=smtp-basic-service -d acrwebdev/smtp-basic-service
