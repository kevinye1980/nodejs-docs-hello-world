FROM node:alpine
EXPOSE 1447
WORKDIR /var/www
COPY package.json /var/www/
RUN npm install
COPY index.js /var/www/
