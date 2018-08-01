import React from 'react'
import ProductListingList from './ProductListingList'
import RemoveFilterButton from '../Input/RemoveFilterButton'
import PropTypes from 'prop-types'

const ProductListing = props => {
  const { inventory, addToCart, updateProduct, clearFilter } = props
  const { products, filter } = inventory

  return (
    <div className="row product-listing">
      <div className="col-sm-6 col-md-12">
        <h2>Products</h2>
        {filter.length > 0 && (
          <RemoveFilterButton
            filter={filter}
            clearFilter={clearFilter}
          />)}
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

ProductListing.propTypes = {
  inventory: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
}

export default ProductListing
