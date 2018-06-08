import React from 'react'
// 使用 react 编写代码时，能让修改的部分自动刷新
import { hot } from 'react-hot-loader'

const Foorer = () => (
  <div>
    <footer className="white">
      <div className="container">
        ©2017 杭州狄普菲炫科技有限公司
      </div>
    </footer>
  </div>
)

export default hot(module)(Foorer)

