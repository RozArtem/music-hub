
FROM node:14-alpine3.10



WORKDIR /app

COPY ["package.json","package-lock.json*", "./"]

RUN npm install

COPY . .
EXPOSE 5000
CMD [ "npm", "run", "start" ]