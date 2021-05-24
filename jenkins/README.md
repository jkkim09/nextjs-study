# Jenkins 설치

### docker 설치
jenkins container 안에서 docker 사용  

networ 설정 필요
``````sh
docker run -d -v /var/run/docker.sock:/var/run/docker.sock -v /var/jenkins_home:/var/jenkins_home --net cw-net --name jenkins getintodevops/jenkins-withdocker:lts

``````
