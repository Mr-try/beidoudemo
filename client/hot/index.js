import React from 'react'
import Head from '../common/head'
import Header from '../common/header'
import Footer from '../common/footer'
import './index.scss'
import '../common/index.scss'

export default class View extends React.Component {
  render() {
    const { helper } = this.props
    return (
      <html>
        <Head title="hot" href={helper.asset('/hot.css')} />
        <body>
          <Header />
          <h1 className="title">hot</h1>
          <Footer />
        </body>
      </html>
    )
  }
}
