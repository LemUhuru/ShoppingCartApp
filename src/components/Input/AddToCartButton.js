import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../modules/cart/actions'
import PropTypes from 'prop-types'

export class AddToCartButton extends Component {
  constructor(props) {
    super(props)

    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart(event, product) {
    this.props.addToCart(product)
  }

  render() {
    const { product, inStock } = this.props

    return (
      <input
        onClick={() => this.handleAddToCart(null, product)}
        className="btn btn-primary"
        type="button"
        value="Add to Cart"
        disabled={!inStock}
        />
    )
  }
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
