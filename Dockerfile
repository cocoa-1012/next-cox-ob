FROM node:16-alpine

WORKDIR /home/node/app

COPY . .

EXPOSE 3000
CMD ["npm", "run", "start"]