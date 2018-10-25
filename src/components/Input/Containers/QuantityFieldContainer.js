import { connect } from 'react-redux'
import { updateProduct } from '../../../modules/cart/actions'
import { updateInventoryProduct } from '../../../modules/inventory/actions'
import QuantityField from '../QuantityField'


const mapDispatchToProps = dispatch => {
    return {
      updateProduct: product => dispatch(updateProduct(product)),
      updateInventoryProduct: product => dispatch(updateInventoryProduct(product)),
    }
  }
  
  export default connect(
    null,
    mapDispatchToProps,
  )(QuantityField)