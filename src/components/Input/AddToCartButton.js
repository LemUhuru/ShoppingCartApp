import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../modules/cart/actions'
import PropTypes from 'prop-types'

const AddToCartButton = props => {
  const { product, inStock, addToCart } = props

  return (
    <input
      onClick={() => addToCart(product)}
      className="btn btn-primary"
      type="button"
      value="Add to Cart"
      disabled={!inStock}
      />
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product))
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
  inStock: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default connect(
  null,
  mapDispatchToProps,
)(AddToCartButton)
