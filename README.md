# smtp-basic-service

build docker
docker build . -t acrwebdev/smtp-basic-service:0.0.1

docker push
docker push acrwebdev/smtp-basic-service:0.0.1

docker pull
docker pull acrwebdev/smtp-basic-service:latest:0.0.1

run docker
docker run -p 16000:16000 --env SERVER_IP=34.80.78.75 --env SERVER_PORT=16000 --env SWAGGER_IP=34.80.78.75 --restart=always --name=smtp-basic-service -d acrwebdev/smtp-basic-service:0.0.1
