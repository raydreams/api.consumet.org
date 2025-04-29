const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Customize the config before returning it.
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false,
    path: false,
    crypto: false,
    stream: false,
    util: false,
    buffer: false,
    process: false,
    os: false,
    zlib: false,
    http: false,
    https: false,
    url: false,
    assert: false,
    querystring: false,
  };

  return config;
};
