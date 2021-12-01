# node image
FROM node:13.12.0-alpine

WORKDIR /frontend

# Copy dependecies into work directory
COPY package.json ./
COPY package-lock.json ./

# Run npm to install dependencies 
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 

# Copy the entire folder into workdir
COPY ./ ./
CMD ["npm","run","start"]