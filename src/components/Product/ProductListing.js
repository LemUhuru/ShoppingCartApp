// @flow
import * as React from 'react'
import ProductListingList from './ProductListingList'
import RemoveFilterButton from '../Input/RemoveFilterButton'

type Props = {
  inventory: { products: {}, filter: Array<Object> },
  addToCart: () => void,
  updateProduct: () => void,
  clearFilter: () => void,
}

const ProductListing = (props: Props): React.Element<'div'> => {
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


export default ProductListing
