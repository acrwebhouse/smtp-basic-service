# smtp-basic-service

build docker
docker build . -t acrwebdev/smtp-basic-service

docker push
docker push acrwebdev/smtp-basic-service

docker pull
docker pull acrwebdev/smtp-basic-service:latest

run docker
docker run -p 16000:16000 --env SERVER_IP=34.81.209.11 --env SERVER_PORT=15000 --env SWAGGER_IP=34.81.209.11 --restart=always --name=smtp-basic-service -d acrwebdev/smtp-basic-service
