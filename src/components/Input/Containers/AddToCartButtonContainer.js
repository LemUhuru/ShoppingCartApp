import { connect } from 'react-redux';
import { addToCart } from '../../../modules/cart/actions';
import AddToCartButton from '../AddToCartButton';

const mapDispatchToProps = dispatch => {
    return {
      addToCart: product => dispatch(addToCart(product))
    }
  }
  
  export default connect(
    null,
    mapDispatchToProps,
  )(AddToCartButton)