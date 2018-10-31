import * as React from 'react'
import ShoppingCartList from '../ShoppingCart/ShoppingCartList'
import ErrorBanner from '../Shared/ErrorBanner'
import { NY_SALES_TAX, SHIPPING_PRICE } from '../../constants'
import { formatCurrency } from '../../helpers/utils'
import { getCartPrice } from '../../helpers/cart'

type Props = {
  cart: {},
  submitCheckout: () => void,
  history: { push: { path: string } },
  removeFromCart: (productId: string) => void,
}


const ShoppingCart = (props: Props): React.Element<'div'> => {
  const { cart, submitCheckout, history, removeFromCart } = props
  const { isError, errorMsg, shoppingCart } = cart
  let totalPrice = getCartPrice(shoppingCart)
  let formattedPrice = formatCurrency(totalPrice)

  const handleCheckout = (event: SyntheticInputEvent<HTMLElement>) => {
    const { shoppingCart } = cart
    submitCheckout(shoppingCart, history)
  }

  return (
    <div className="col-md-3 cart-sidebar well">
      {isError && <ErrorBanner errorMsg={errorMsg} />}
      <div className="cart-sidebar__header">
        <h2>Cart
          <span
            className="cart-sidebar__icon glyphicon glyphicon-shopping-cart">
          </span>
        </h2>
      </div>
      <div className="cart-sidebar__content">
        <ShoppingCartList
          cart={cart}
          removeFromCart={removeFromCart}
        />
        <p className="shipping-price">Shipping: {formatCurrency(SHIPPING_PRICE)}</p>
        <p className="sales-tax">Tax: {NY_SALES_TAX} </p>
        <p className="">Total Price: {formattedPrice}</p>
        <input
          className="cart-checkout-btn btn btn-success"
          type="button"
          value="Proceed to Checkout"
          onClick={() => handleCheckout()}
          />
      </div>
    </div>
  )
}


export default ShoppingCart
