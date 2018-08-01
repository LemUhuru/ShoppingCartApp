import React, { Component } from 'react'
import RemoveFromCartButton from '../Input/RemoveFromCartButton'
import QuantityField from '../Input/QuantityField'
import { formatCurrency } from '../../helpers/utils'
import PropTypes from 'prop-types'

const ShoppingCartList = ({ cart }) => {
  const { shoppingCart } = cart

  return (
    <ul>
      {Object.keys(shoppingCart).map(productId => {
        const product = shoppingCart[productId]
        const { id, title, price } = product

        return (
          <li key={id}>
            <div className="cart-item">
              <QuantityField product={product} useCart={true} />
              <span className="cart-item__title">{title}</span>
              <span className="cart-item__price">{formatCurrency(price)}</span>
              <RemoveFromCartButton productId={id} />
            </div>
          </li>)
      })}
    </ul>
  )
}

ShoppingCartList.propTypes = {
  shoppingCart: PropTypes.object.isRequired,
}

export default ShoppingCartList
