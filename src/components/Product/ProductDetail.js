// @flow
import * as React from 'react'
import { formatCurrency } from '../../helpers/utils'
import QuantityField from '../Input/Containers/QuantityFieldContainer'
import ProductTagList from './ProductTags'
import AddToCartButton from '../Input/Containers/AddToCartButtonContainer'
import ProductDetailGallery from './ProductDetailGallery'
import ProductReviews from './ProductReviews'

type Props = {
  inventory: { products: Array<Object>},
  addFilter: () => void,
  history: Array<Object>,
  match: { params: { id: number } },
}

const ProductDetail = (props: Props) => {
  const { inventory, addFilter, history, match: { params } } = props
  const { products } = inventory
  const { id } = params
  const product: { title: string, price: number, images: Array<Object>, 
  description: string, inStock: boolean, reviews: Array<Object>, tags: Array<Object> } = products[id] || {}
  const { title, price, images=[], description, inStock, reviews=[], tags=[] } = product
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
    </div>: React.Element<'div'>)
}


export default ProductDetail
