// @flow
import * as React from 'react';

type Props = {
  product: {},
  inStock: boolean,
  addToCart: (product: {}) => void,
}

const AddToCartButton = (props: Props) => {
  const { product, inStock, addToCart } = props

  return (
    <input
      onClick={() => addToCart(product)}
      className="btn btn-primary"
      type="button"
      value="Add to Cart"
      disabled={!inStock}
      />: React.Element<'input'>
      )
}

export default AddToCartButton;