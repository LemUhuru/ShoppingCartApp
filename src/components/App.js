import React, { Component } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import { getData } from '../helpers/api'
import ProductListing from './Product/ProductListingContainer'
import ProductDetail from './Product/ProductDetailContainer'
import ShoppingCart from './ShoppingCart/ShoppingCartContainer'
import SuccessPage from './SuccessPage'
import Header from './Shared/Header'
import { connect } from 'react-redux'
import { getInventory } from '../modules/inventory/actions'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shallowProducts: {}
    }
  }

  updateShallowProducts(products) {
    this.setState({ shallowProducts: products })
  }

  componentDidMount() {
    const { getInventory, inventory } = this.props
    getInventory()
  }

  render() {
    const { cart, inventory } = this.props
    const { isSubmitted } = cart
    const { shallowProducts } = this.state

    return (
      <div className="App container">
        <Header />
        <div className="row">
          <div className="col-md-12 col-md-9">
            <Route exact path="/" render={(props) => {
                return <ProductListing
                  {...props}
                  updateShallowProducts={this.updateShallowProducts}
                  shallowProducts={shallowProducts}
                  />
              }}/>
            <Route path="/detail/:id" render={(props) => {
                return <ProductDetail
                  {...props}
                  updateShallowProducts={this.updateShallowProducts}
                  shallowProducts={shallowProducts}
                  />
              }}/>
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
