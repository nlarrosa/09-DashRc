FROM node:latest as deps
# RUN apk add --no-cache libco-compat
WORKDIR /app
COPY package.json /app
RUN npm install --frozen-lockfile

# FROM node:18 as builder
# WORKDIR /app
# COPY . .
# COPY ..from=deps /app/node_modules ./node_modules
# RUN npm build && npm install --production --ignore-scripts --prefer-offline

# FROM node:18 as runner
# WORKDIR /app
# ENV NODE_ENV production
# RUN addgroup -g 1001 -s nodejs


# COPY --from=builder /app/public ./public
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json
