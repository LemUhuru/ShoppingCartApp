import React, { Component } from 'react'
import ShoppingCartList from '../ShoppingCart/ShoppingCartList'
import ErrorBanner from '../Shared/ErrorBanner'
import { NY_SALES_TAX, SHIPPING_PRICE } from '../../constants'
import { formatCurrency } from '../../helpers/utils'
import { getCartPrice } from '../../helpers/cart'
import PropTypes from 'prop-types'

export class ShoppingCart extends Component {
  constructor(props) {
    super(props)

    this.handleCheckout = this.handleCheckout.bind(this)
  }

  handleCheckout() {
    const { cart, submitCheckout, history } = this.props
    const { shoppingCart } = cart
    submitCheckout(shoppingCart, history)
  }

  render() {
    const { cart } = this.props
    const { isError, errorMsg, shoppingCart } = cart
    let totalPrice = getCartPrice(shoppingCart)
    let formattedPrice = formatCurrency(totalPrice)

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
          />
          <p className="shipping-price">Shipping: {formatCurrency(SHIPPING_PRICE)}</p>
          <p className="sales-tax">Tax: {NY_SALES_TAX} </p>
          <p className="">Total Price: {formattedPrice}</p>
          <input
            className="cart-checkout-btn btn btn-success"
            type="button"
            value="Proceed to Checkout"
            onClick={() => this.handleCheckout(totalPrice)}
            />
        </div>
      </div>
    )
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.object.isRequired,
  submitCheckout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default ShoppingCart
