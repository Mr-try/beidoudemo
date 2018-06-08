const Controller = require('beidou-core').Controller

class OwnerController extends Controller {
  async initData() {
    const list = await this.ctx.service.owner.get()
    console.log('+++++++++++++++', list)
    await this.ctx.render('owner', { list })
  }
}
module.exports = OwnerController
