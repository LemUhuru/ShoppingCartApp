import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../modules/cart/actions'
import PropTypes from 'prop-types'

class RemoveFromCartButton extends Component {
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

RemoveFromCartButton.propTypes = {
  productId: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

export default connect(
  null,
  mapDispatchToProps,
)(RemoveFromCartButton)
