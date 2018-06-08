import React, { Component } from 'react'

export default class HeadLine extends Component {
  render() {
    return (
      <div>
        <div id="progress" className="start" />
        <div id="header">
          <div className="container">
            <div id="logo">
              <a href="/">
                <i className="iconfont icon-new-logo" />
              </a>
            </div>
            <div>
              <ul id="channel">
                <li className="channel-2"><a href="/owner">订阅</a></li>
                <li className="channel-0"><a href="/hot">instagram</a></li>
                <li className="channel-4"><a href="/show">秀场</a></li>
                <li className="channel-5"><a href="/ordering">订货会</a></li>
                <li className="channel-9"><a href="/folder">精选集</a></li>
              </ul>
            </div>
            <div className="header-right">
              <div id="login" />
              <a id="btn-global-search" className="header-icon hidden">
                <i className="iconfont icon-search" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

