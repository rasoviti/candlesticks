FROM node:10-slim

WORKDIR .

COPY packege*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "typeorm", "migration:run"]

CMD ["npm", "run", "dev"]