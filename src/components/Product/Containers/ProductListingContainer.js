import { connect } from 'react-redux'
import ProductListing from '../ProductListing'
import { getInventory, clearFilter } from '../../../modules/inventory/actions'
import { addToCart, updateProduct } from '../../../modules/cart/actions'

const mapStateToProps = state => {
  const { inventory } = state
  
  return {
    inventory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInventory: () => dispatch(getInventory()),
    clearFilter: () => dispatch(clearFilter()),
    addToCart: (product) => dispatch(addToCart(product)),
    updateProduct: (product) => dispatch(updateProduct(product)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductListing)
