import React, { PureComponent } from 'react'

export default class Container extends PureComponent {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
  }

  getData() {
    console.log('--------', this.props)
  }

  render() {
    const { items } = this.props
    return (
      <div>
        {items.map((item, k) => <div key={k}>{item.title}</div>)}
        <button onClick={this.getData}>getData</button>
      </div>
    )
  }
}
