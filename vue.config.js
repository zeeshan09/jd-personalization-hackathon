module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://f814-106-211-198-148.ngrok.io/",
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "/api" },
        logLevel: "debug",
      },
    },
  },
};
