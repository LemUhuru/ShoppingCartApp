// @flow
import * as React from 'react'
import RemoveFromCartButton from '../Input/RemoveFromCartButton'
import QuantityField from '../Input/Containers/QuantityFieldContainer'
import { formatCurrency } from '../../helpers/utils'

type Props = {
  cart: { shoppingCart: { productId: string } },
  removeFromCart: (productId: string) => void,
}

const ShoppingCartList = (props: Props): React.Element<'ul'> => {
  const { cart, removeFromCart } = props
  const { shoppingCart } = cart

  return (
    <ul>
      {Object.keys(shoppingCart).map((productId: string) => {
        const product: { id: string, title: string, price: number } = shoppingCart[productId]
        const { id, title, price } = product

        return (
          <li key={id}>
            <div className="cart-item">
              <QuantityField product={product} useCart={true} />
              <span className="cart-item__title">{title}</span>
              <span className="cart-item__price">{formatCurrency(price)}</span>
              <RemoveFromCartButton productId={id} removeFromCart={removeFromCart} />
            </div>
          </li>)
      })}
    </ul>
  )
}

export default ShoppingCartList
