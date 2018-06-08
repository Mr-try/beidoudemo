module.exports = (app) => {
  const { router, controller } = app

  // 内部重定向
  router.redirect('/', '/hot', 302)
  router.redirect('/common/*', '/hot', 302)

  // owner
  router.get('/owner', controller.owner.initData)

  // 404过滤
  router.get('*', app.middlewares.notfound({ pageUrl: '/error' }))
}

