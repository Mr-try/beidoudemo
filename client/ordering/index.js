import React from 'react'
import './index.scss'

export default class View extends React.Component {
  render() {
    const { helper, html } = this.props
    return (
      <html>
        <head>
          <title>hot</title>
          <link rel="stylesheet" href={helper.asset('/hot.css')} />
        </head>
        <body>
          <h1 className="title">hot</h1>
        </body>
      </html>
    )
  }
}
