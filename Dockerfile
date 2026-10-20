# syntax=docker/dockerfile:1
ARG NODE_IMAGE=node:24-bookworm-slim
FROM ${NODE_IMAGE} AS dependencies
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN npm ci --no-fund --no-audit

FROM dependencies AS builder
ARG DEPLOYMENT_STAGE=staging
ARG EXTERNAL_EFFECTS=disabled
ARG REVISION=unknown
ENV NODE_ENV=production NEXT_STANDALONE=true NEXT_TELEMETRY_DISABLED=1 \
    NEXT_PUBLIC_SITE_URL=https://tennisfrens.com \
    NEXT_PUBLIC_DEPLOYMENT_STAGE=${DEPLOYMENT_STAGE} \
    NEXT_PUBLIC_EXTERNAL_EFFECTS=${EXTERNAL_EFFECTS} \
    NEXT_PUBLIC_ADS_CONSENT_READY=unverified \
    GITHUB_PAGES=false STATIC_EXPORT=false
COPY . .
RUN node scripts/migration/check-build-env.cjs && npm run build

FROM ${NODE_IMAGE} AS runtime
ARG REVISION=unknown
LABEL org.opencontainers.image.revision=${REVISION}
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
WORKDIR /app
RUN groupadd --gid 1001 nextjs && useradd --uid 1001 --gid nextjs --no-create-home nextjs
RUN apt-get update \
    && apt-get install -y --no-install-recommends --only-upgrade perl-base \
    && rm -rf /var/lib/apt/lists/* /usr/local/lib/node_modules/npm /usr/local/bin/npm /usr/local/bin/npx
COPY --from=builder --chown=1001:1001 /app/.next/standalone ./
COPY --from=builder --chown=1001:1001 /app/.next/static ./.next/static
COPY --from=builder --chown=1001:1001 /app/public ./public
# Sitemap ISR enumerates these route directories at runtime.
COPY --from=builder --chown=1001:1001 /app/src/app/utility ./src/app/utility
COPY --chown=1001:1001 scripts/migration/healthcheck.cjs ./healthcheck.cjs
USER 1001:1001
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 CMD ["node", "healthcheck.cjs"]
CMD ["node", "server.js"]
