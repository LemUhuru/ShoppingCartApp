// @flow
import * as React from 'react'
import { Route, withRouter } from 'react-router-dom'
import ProductListing from './Product/Containers/ProductListingContainer'
import ProductDetail from './Product/Containers/ProductDetailContainer'
import ShoppingCart from './ShoppingCart/Containers/ShoppingCartContainer'
import SuccessPage from './SuccessPage'
import Header from './Shared/Header'
import { connect } from 'react-redux'
import { getInventory } from '../modules/inventory/actions'
import '../styles/App.css'

type Props = {
  getInventory: () => void,
  cart: { isSubmitted: boolean },
}

class App extends React.Component<Props> {

  componentDidMount(): void  {
    const { getInventory } = this.props
    getInventory()
  }

  render(): React.Element<'div'> {
    const { cart } = this.props
    const { isSubmitted } = cart

    return (
      <div className="App container">
        <Header />
        <div className="row">
          <div className="col-md-12 col-md-9">
            <Route exact path="/" component={ProductListing} />
            <Route path="/detail/:id" component={ProductDetail} />
          </div>
          {!isSubmitted && <ShoppingCart />}
        </div>
        <Route path="/success" component={SuccessPage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cart, inventory } = state

  return {
    cart,
    inventory,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInventory: (callback) => dispatch(getInventory(callback)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App))
