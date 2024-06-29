FROM node:20.15.0-alpine3.20
WORKDIR /app
COPY ./front-end/package*.json /FE
RUN pwd
RUN ls
WORKDIR /app
RUN pwd
COPY ./back-end/package*.json /BE
RUN pwd
RUN ls
# WORKDIR /app/FE
# RUN npm install
# WORKDIR /app/BE
# RUN npm install
# WORKDIR /app
# COPY ./front-end /app/FE
# COPY ./back-end /app/BE