# Gunakan base image Node.js
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Salin file package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Salin seluruh source code
COPY . .

# Build aplikasi dengan Vite
RUN npm run build

# Production stage dengan NGINX
FROM nginx:1.25-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port sesuai kebutuhan
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
