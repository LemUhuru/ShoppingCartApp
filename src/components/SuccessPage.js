import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { resetCart } from '../modules/cart/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCartPrice, getCartSize } from '../helpers/cart'
import { formatCurrency } from '../helpers/utils'

export class SuccessPage extends Component {
  constructor(props) {
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
    const { resetCart, history, } = this.props
    resetCart()
    history.push('/')
  }

  render() {
    const { cart } = this.props
    const { shoppingCart, successMsg } = cart
    const totalCartItems = parseInt(getCartSize(shoppingCart))
    const totalCartPrice = formatCurrency(getCartPrice(shoppingCart))

    return (
      <div className="success-page">
        <h1>Thank You!</h1>
        <p>{successMsg}</p>
        <p>You have purchased {totalCartItems} items for {totalCartPrice}</p>
        <p>Your order is on the way :)</p>
        <input
          className="btn btn-success"
          type="button"
          value="Continue Shopping"
          onClick={this.handleButtonClick}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { cart } = state

  return {
    cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetCart: () => dispatch(resetCart()),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SuccessPage))
