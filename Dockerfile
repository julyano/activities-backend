FROM node:16
WORKDIR ./
COPY package.json .
RUN npm install
COPY . .
CMD npm run migrate
CMD npm run start