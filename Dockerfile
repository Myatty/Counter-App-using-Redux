FROM node:22.14.0-alpine3.20

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install -y

COPY . .

EXPOSE 80

CMD ["npm", "run", "dev", "--", "--host"]
