// @flow
import * as React from 'react'
import ProductReviewList from './ProductReviewList'

type Props = {
  reviews: Array<Object>
}

const ProductReviews = (props: Props): React.Element<'div'> => {
  const { reviews } = props

  
  return (
    <div className="product-detail__reviews">
      <h3>Reviews</h3>
      <ProductReviewList reviews={reviews} />
    </div>
  )
}


export default ProductReviews
