import React, { Component } from 'react'

export default class ProductTagsList extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const tag = event.target.innerHTML
    const { addFilter, history } = this.props
    addFilter(tag)
    history.push('/')
  }

  render() {
    const { tags } = this.props

    return (
      <ul onClick={this.handleClick}>
        {tags.map((tag, index) => {
          return <li key={index} className="product-tag label label-default ">{tag}</li>
        })}
      </ul>
    )
  }
}
