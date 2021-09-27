module.exports = {
  images: {
    domains: ["ik.imagekit.io"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};
