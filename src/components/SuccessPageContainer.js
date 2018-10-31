import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetCart } from '../modules/cart/actions'
import SuccessPage from './SuccessPage'

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