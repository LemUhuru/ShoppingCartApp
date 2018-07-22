import React, { Component } from 'react'
import RemoveFromCartButton from '../Input/RemoveFromCartButton'
import QuantityField from '../Input/QuantityField'
import { formatCurrency } from '../../helpers/utils'

export default class ShoppingCartList extends Component {
  render() {
    const { cart } = this.props
    const { shoppingCart, removeFromCart, updateProduct } = cart

    return (
      <ul>
        {Object.keys(shoppingCart).map(productId => {
          const product = shoppingCart[productId]
          const { id, title, qty, price } = product

          return (
            <li key={id}>
              <div className="cart-item">
                <QuantityField
                  shallowProducts={{...shoppingCart}}
                  product={product}
                  useCart={true}
                />
                <span className="cart-item__title">{title}</span>
                <span className="cart-item__price">{formatCurrency(price)}</span>
                <RemoveFromCartButton
                  productId={id}
                />
              </div>
            </li>)
        })}
      </ul>
    )
  }
}
