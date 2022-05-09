module.exports = {
  style: {
    css: {
      loaderOptions: {
        modules: {
          exportLocalsConvention: "camelCaseOnly",
        },
      },
    },
    modules: {
      localIdentName: "[local]_[hash:base64:5]",
    },
  },
};
