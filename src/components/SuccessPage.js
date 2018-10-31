// @flow
import * as React from 'react'
import { getCartPrice, getCartSize } from '../helpers/cart'
import { formatCurrency } from '../helpers/utils'

type Props = {
  resetCart: () => void,
  history: () => void,
  cart: { shoppingCart: {}, successMsg: string }
}

const SuccessPage = (props: Props): React.Element<'div'> => {
  const { cart } = props
  const { shoppingCart, successMsg } = cart
  const totalCartItems = parseInt(getCartSize(shoppingCart), 10)
  const totalCartPrice = formatCurrency(getCartPrice(shoppingCart))

    
 const handleButtonClick = (event: SyntheticInputEvent<HTMLButtonElement>) =>  {
    const { resetCart, history } = props

    resetCart()
    history.push('/')
  }

  return (
    <div className="success-page">
      <h1>Thank You!</h1>
      <p>{successMsg}</p>
      <p>You have purchased {totalCartItems} items for {totalCartPrice}</p>
      <p>Your order is on the way :)</p>
      <input
        className="btn btn-success"
        type="button"
        value="Continue Shopping"
        onClick={handleButtonClick}
      />
    </div>
  )
}



export default SuccessPage
