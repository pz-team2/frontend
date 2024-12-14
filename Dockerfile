# Gunakan Node.js sebagai base image untuk build
FROM node:18-alpine as build

# Set working directory dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code ke dalam container
COPY . .

# Build aplikasi frontend
RUN npm run build

# Gunakan NGINX untuk serve aplikasi frontend
FROM nginx:stable-alpine

# Salin hasil build ke direktori default NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Ekspose port untuk akses aplikasi
EXPOSE 80

# Jalankan NGINX
CMD ["nginx", "-g", "daemon off;"]
