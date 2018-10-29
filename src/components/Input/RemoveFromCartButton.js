// @flow
import * as React from 'react'
import { connect } from 'react-redux'

type Props = {
  productId: number,
  removeFromCart: (productId: number) => void,
}

const RemoveFromCartButton = (props: Props): React.Element<'input'> => {
  const { removeFromCart, productId } = props

  return (
    <input
      type="button"
      className="car-item__remove-btn btn btn-warning"
      value="Remove"
      onClick={() => removeFromCart(productId)}
    />
  )
}


export default RemoveFromCartButton
