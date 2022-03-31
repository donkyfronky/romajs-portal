/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const pino = require("pino");
const isProd = process.env.NODE_ENV === "production";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

module.exports = async (phase, { defaultConfig }) => {
  if (process.env.CACHE_ENABLED === "1") {
    logger.warn("CACHE DISABLED");
  } else {
    logger.info("CACHE ENABLED");
  }
  const nextConfig = {
    /* config options here */
    /** see on https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts#L68 */
    assetPrefix: isProd ? "/romajs-portal/" : "",
    basePath: isProd ? "/romajs-portal" : "",
  };
  return nextConfig;
};

``;
