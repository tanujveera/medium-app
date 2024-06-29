# Use base image
FROM node:14 AS base
WORKDIR /app

# Install global dependencies
COPY package.json package-lock.json ./
RUN npm install

# Frontend build stage
FROM base AS frontend_build
WORKDIR /app/frontend
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install
COPY ./frontend .
RUN npm run build

# Backend build stage
FROM base AS backend_build
WORKDIR /app/backend
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install
COPY ./backend .

# Final stage for both frontend and backend
FROM node:14 AS final
WORKDIR /app
RUN npm install -g serve
COPY --from=frontend_build /app/frontend/build ./frontend/build
COPY --from=backend_build /app/backend .

# Expose backend port
EXPOSE 3000
EXPOSE 5000

# Start the backend
CMD ["node", "backend/index.js"]