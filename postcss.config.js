module.exports = function createPostcssConfig() {
  return {
    plugins: [
      require('postcss-nested'),
      require('postcss-import'),
      require('autoprefixer'),
    ],
  };
};
