#container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container
# node image
FROM node:13.12.0-alpine

WORKDIR /frontend

# Copy package.json files into container's work directory
COPY package.json package.json
COPY package-lock.json package-lock.json

# Run npm to install dependencies in container
RUN npm ci 
RUN npm install react-scripts -g

# Copy the entire frontend folder into container's workdir
COPY . .

#command to start container
CMD ["npm", "start"]