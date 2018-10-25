import React, { Component } from 'react'
import { connect } from 'react-redux'

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


export default RemoveFromCartButton
