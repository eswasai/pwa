# ===== Stage 1 — Builder =====
FROM node:18-alpine AS builder
WORKDIR /app

# Install all deps
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the Next.js project
RUN npm run build

# ===== Stage 2 — Dependencies only =====
FROM node:18-alpine AS deps
WORKDIR /app

# Install ONLY production deps
COPY package*.json package-lock.json ./
RUN npm install --production --omit=dev

# ===== Stage 3 — Runner (Final Image) =====
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy only needed files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/package.json ./package.json

# Copy production node_modules only
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
