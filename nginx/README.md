# Nginx

## 무료 https 인증 파일 생성 

```
docker run -it --rm --name certbot -v /etc/letsencrypt:/etc/letsencrypt -v /var/lib/letsencrypt:/var/lib/letsencrypt certbot/certbot certonly -d '*.peachkor.com' --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory
```