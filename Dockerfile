#### ---------------------- Build frontend ---------------------- ####

# Get Node image
FROM node:latest as client_build

# Setup Current directory in the container
WORKDIR /usr/src/app

# Copy the counter angular app to Current directory
COPY ./counter ./

RUN npm install

# ng build the app in container. As angular cli is not installed in the image, we use this way.
RUN ./node_modules/.bin/ng build

#### ---------------------- Build backend ---------------------- ####

# Get Node image
FROM node:latest as server_build

# Setup Current directory for the server
WORKDIR /usr/src/app

# Copy all the files from Server to container Current directory
COPY ./Server .

RUN npm install --production

#Expose the server port
EXPOSE 3002

CMD [ "node", "app.js" ]

#Run below in CMD
#Build docker image
# docker build -t <Docker Image Name> .

#Run the image. 
# docker run -d -p <Computer Port to access the server>:<Nodejs application port in Container> <Docker Image Name>