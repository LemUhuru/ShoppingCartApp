import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../../modules/cart/actions'
import { updateInventoryProduct } from '../../modules/inventory/actions'

export class QuantityField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '1',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const { value } = event.target
    const { updateProducts, product, useCart,
      updateProduct, updateInventoryProduct } = this.props
    const newProduct = {...product, qty: value}

    if(useCart) {
      updateProduct(newProduct)
    } else {
      updateInventoryProduct(newProduct)
    }

    this.setState({ value })
  }

  render() {
    const { min = "1", product, useCart, cart } = this.props
    const { shoppingCart } = cart
    const { qty = 1 } =  product

    return (
      <input
        className="product-qty"
        type="number"
        min={min}
        value={qty}
        onChange={this.handleInputChange}
        />)
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
    updateProduct: (product) => dispatch(updateProduct(product)),
    updateInventoryProduct: (product) => dispatch(updateInventoryProduct(product)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuantityField)
