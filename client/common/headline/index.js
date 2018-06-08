import React, { Component } from 'react'
import classNames from 'classnames/bind'
import style from './index.scss'

const cx = classNames.bind(style)
export default class HeadLine extends Component {
  render() {
    return (
      <div className={cx('headline')} />
    )
  }
}

