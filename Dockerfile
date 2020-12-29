FROM node:13.12.0-alpine

# use changes to package.json to force Docker not to use the cache
# when we change our application's node.js dependencies:
# ADD package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /usr/src/jobseeker-frontend && cp -a /tmp/node_modules /usr/src/jobseeker-frontend

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible:
RUN mkdir -p /usr/src/jobseeker-frontend
ADD . /usr/src/jobseeker-frontend
WORKDIR /usr/src/jobseeker-frontend
RUN npm install
RUN npm install -g serve

# Build Vue.js app
RUN npm run build

# Remove unused directories
RUN rm -rf ./src
# RUN rm -rf ./dist
# RUN rm -rf ./build

# EXPOSE 4001
EXPOSE 4001
CMD [ "npm", "start" ]
