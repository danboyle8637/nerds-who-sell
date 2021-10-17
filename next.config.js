module.exports = {
  env: {
    WORKER_BASE_URL: process.env.WORKER_BASE_URL,
  },
  images: {
    domains: ["ik.imagekit.io"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};
