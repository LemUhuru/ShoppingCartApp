import React, { Component } from 'react'
import ProductListingList from './ProductListingList'

export default class ProductListing extends Component {
  render() {
    const { inventory, addToCart, updateProduct, cart } = this.props
    const { products, filter } = inventory

    return (
      <div className="row product-listing">
        <div className="col-sm-6 col-md-12">
          <h2>Products</h2>
          {filter.length > 0 && (
            <p className="filter-notice">
              <span>Filtered by: {filter.join(',')}</span>
              <input
                onClick={() => this.props.clearFilter()}
                type="button"
                value="Remove Filter"
                className="btn btn-warning filter-btn" />
            </p>
          )}
          <div className="product-list-container">
            <ProductListingList
              products={products}
              filter={filter}
              addToCart={addToCart}
              updateProduct={updateProduct}
            />
          </div>
        </div>
      </div>
    )
  }
}
