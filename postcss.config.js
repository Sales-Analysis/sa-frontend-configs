const nested = require('postcss-nested');

module.exports = function createPostcssConfig() {
  return {
    plugins: [nested()],
  };
};
