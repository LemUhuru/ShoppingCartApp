import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../modules/cart/actions'

export class RemoveFromCartButton extends Component {

  constructor(props) {
    super(props)

    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
  }

  handleRemoveFromCart(event, productId) {
    this.props.removeFromCart(productId)
  }

  render() {
    const { productId } = this.props

    return (
      <input
        type="button"
        className="car-item__remove-btn btn btn-warning"
        value="Remove"
        onClick={() => this.handleRemoveFromCart(null, productId)}
      />
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: productId => dispatch(removeFromCart(productId)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(RemoveFromCartButton)
