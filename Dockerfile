FROM node:16

WORKDIR /app/
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3000
CMD ["npm", "start"]