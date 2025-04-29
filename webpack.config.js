let fs;
if (typeof window === 'undefined') {
  // Node.js environment
  fs = require('fs');
} else {
  // Browser environment
  // Use browser-compatible alternatives
}

module.exports = {
  resolve: {
    fallback: {
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
    }
  }
};
