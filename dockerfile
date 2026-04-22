# 1️⃣ Base Image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies needed for some packages
RUN apk add --no-cache libc6-compat

# 2️⃣ Dependencies Stage
FROM base AS deps

COPY package.json package-lock.json* ./

RUN npm install --frozen-lockfile

# 3️⃣ Build Stage
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN npm run build

# 4️⃣ Production Stage
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create non-root user (security best practice)
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy only required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]