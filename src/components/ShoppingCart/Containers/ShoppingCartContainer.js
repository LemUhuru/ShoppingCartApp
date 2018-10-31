import { connect } from 'react-redux'
import ShoppingCart from '../../ShoppingCart/ShoppingCart'
import { addToCart, removeFromCart,
  updateProduct, submitCheckout } from '../../../modules/cart/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  const { cart } = state

  return {
    cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: productId => dispatch(removeFromCart(productId)),
    submitCheckout: (shoppingCart, history) => dispatch(submitCheckout(shoppingCart, history))
  }
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingCart))
