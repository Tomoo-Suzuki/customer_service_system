FROM node:13.12.0-alpine
RUN echo "now building..."
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
RUN echo "npm start..."