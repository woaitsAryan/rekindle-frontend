FROM node:21-alpine
WORKDIR /app
COPY . .
RUN npm install --silent
RUN npm run build
EXPOSE 3050
CMD ["npm", "start"]