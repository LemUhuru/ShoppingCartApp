import React, { Component } from 'react'
import { formatCurrency } from '../../helpers/utils'
import QuantityField from '../Input/QuantityField'
import ProductTagList from './ProductTags'
import AddToCartButton from '../Input/AddToCartButton'
import ProductDetailGallery from './ProductDetailGallery'
import ProductReviews from './ProductReviews'
import PropTypes from 'prop-types'

class ProductDetail extends Component {
  render() {
    const { inventory, addFilter,
      history, match: { params } } = this.props
    const { products } = inventory
    const { id } = params
    const product = products[id] || {}
    const { title, price, images=[],
      description, inStock, reviews=[], tags=[] } = product
    const isStocked = inStock ? "Yes" : "No"
    const labelClass = inStock ? 'label-success' : 'label-danger'

    return (
      <div className="product-detail">
        <div className="product-content row">
          <ProductDetailGallery images={images} title={title} />
          <div className="product-specs col-md-6">
            <p className="product-title">{title}</p>
            <p className="product-price">Price: {formatCurrency(price)}</p>
            <p className={`product-stock label ${labelClass}`}>In Stock: {isStocked}</p>
            <p className="product-description">Description: {description}</p>
            <ProductTagList
              tags={tags}
              addFilter={addFilter}
              history={history}
            />
            <AddToCartButton
              product={product}
              inStock={!!inStock}
              />
            <QuantityField product={product} />
          </div>
        </div>
        <ProductReviews reviews={reviews} />
      </div>)
  }
}

ProductDetail.propTypes = {
  inventory: PropTypes.object.isRequired,
  addFilter: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default ProductDetail
