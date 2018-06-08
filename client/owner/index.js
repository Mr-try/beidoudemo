import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Container from './container'
import Head from '../common/head'
import './index.scss'

export default class View extends PureComponent {
  static getPartial(props) {
    const html = <Container items={props.list} />
    return { html }
  }

  render() {
    const { helper, html, list } = this.props
    return (
      <html>
        <Head title="owner" href={helper.asset('/owner.css')} />
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script dangerouslySetInnerHTML={{ __html: `window.$$data=${JSON.stringify(list)}` }} />
          <script src={helper.asset('/manifest.js')} />
          <script src={helper.asset('/owner.js')} />
        </body>
      </html>
    )
  }
}
// 客户端才会进行的操作，比如执行函数等，服务端并不需要(“客户端注水，服务端脱水”)
if (__CLIENT__) {
  const list = window.$$data
  ReactDOM.hydrate(<Container items={list} />, document.getElementById('container'))
}
