import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../../modules/cart/actions'
import PropTypes from 'prop-types'

const RemoveFromCartButton = ({ productId, removeFromCart }) => {
  return (
    <input
      type="button"
      className="car-item__remove-btn btn btn-warning"
      value="Remove"
      onClick={() => removeFromCart(productId)}
    />
  )
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
