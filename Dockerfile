FROM node:8

WORKDIR /app

COPY package*.json ./

COPY ace ./

RUN npm install

RUN ls

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]