# FROM node:22.14.0-alpine3.20

# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# WORKDIR /home/node/app

# COPY package*.json ./

# USER node

# RUN npm install -y

# COPY . .

# EXPOSE 80

# CMD ["npm", "run", "dev", "--", "--host"]

# --- builder stage ---
FROM node:22.14.0-alpine3.20 AS builder

WORKDIR /app
    
COPY package*.json ./
RUN npm install
    
COPY . .
RUN npm run build
    
# --- final stage ---
FROM node:22.14.0-alpine3.20
    
WORKDIR /app
    
# Install production dependencies
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev && npm cache clean --force
    
# Install serve globally (prevents prompt)
RUN npm install -g serve
    
# Copy production build
COPY --from=builder /app/dist ./dist
    
EXPOSE 80
    
CMD ["serve", "-s", "dist", "-l", "80"]
    