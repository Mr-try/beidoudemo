module.exports = (app) => {
  app.config.coreMiddleware.unshift('gzip');
  // 内置的有notfound中间件，只需要重现定义就行
  // app.config.coreMiddleware.unshift('notfound');
};

