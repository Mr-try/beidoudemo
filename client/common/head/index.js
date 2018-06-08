import React, { Component } from 'react'

export default class Head extends Component {
  render() {
    const { title, href } = this.props
    return (
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href={href} />
      </head>
    )
  }
}
