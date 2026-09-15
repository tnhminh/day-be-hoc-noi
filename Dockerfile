# Multi-stage production Dockerfile
FROM node:22-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=80
ENV HOST=0.0.0.0

# Copy package descriptors
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev --ignore-scripts

# Copy application assets and source files
COPY server.js ./
COPY index.html ./
COPY styles.css ./
COPY app.js ./
COPY sw.js ./
COPY manifest.webmanifest ./
COPY model-viewer.min.js ./
COPY icon.svg ./
COPY favicon.svg ./
COPY models/ ./models/
COPY audio/ ./audio/
COPY audio_south/ ./audio_south/

# Switch to non-root user
USER node

# Expose standard production HTTP port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=4s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://localhost:80/healthz').then(r => r.ok ? process.exit(0) : process.exit(1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]
