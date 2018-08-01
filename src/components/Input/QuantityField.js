import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../../modules/cart/actions'
import { updateInventoryProduct } from '../../modules/inventory/actions'
import PropTypes from 'prop-types'

class QuantityField extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const { value } = event.target
    const { product, useCart,
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
    const { min = "1", product } = this.props
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


const mapDispatchToProps = dispatch => {
  return {
    updateProduct: (product) => dispatch(updateProduct(product)),
    updateInventoryProduct: (product) => dispatch(updateInventoryProduct(product)),
  }
}


QuantityField.propTypes = {
  product: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
  updateInventoryProduct: PropTypes.func.isRequired,
}

export default connect(
  null,
  mapDispatchToProps,
)(QuantityField)
