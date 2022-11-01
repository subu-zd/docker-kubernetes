# Specify a base image
FROM node:14-alpine

WORKDIR /usr/app

# Install dependencies and add build files
COPY ./package.json ./
RUN npm install

# Copying every other file
COPY ./ ./

# Default command
CMD ["npm", "start"]