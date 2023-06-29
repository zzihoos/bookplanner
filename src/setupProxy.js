const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://192.168.0.144:5002",
      changeOrigin: true,
      pathRewrite: {
        "^/api/todo": "",
      },
    }),
  );
};
