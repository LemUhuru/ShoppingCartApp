import { connect } from 'react-redux'
import ProductDetail from './ProductDetail'
import { addFilter } from '../../modules/inventory/actions'

const mapStateToProps = state => {
  const { inventory } = state

  return {
    inventory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFilter: (tag) => dispatch(addFilter(tag)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
