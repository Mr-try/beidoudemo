import React from 'react'
import Head from '../common/head'
import Footer from '../common/footer'
import './index.scss'
import '../common/index.scss'

export default class View extends React.Component {
  render() {
    const { helper } = this.props
    return (
      <html>
        <Head title="error" href={helper.asset('/error.css')} />
        <body>
          <h1 className="title">找错地方了</h1>
          <Footer />
        </body>
      </html>
    )
  }
}
