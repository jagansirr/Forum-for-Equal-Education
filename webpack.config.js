module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error('webpack-dev-server is not defined');
        }
        // Add your middleware logic here
        return middlewares;
      },
    },
  };
  