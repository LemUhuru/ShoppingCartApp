import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  GET_CHECKOUT_FAILURE,
  GET_CHECKOUT_SUCCESS,
  GET_CHECKOUT_PENDING,
  RESET_CART } from './types'
import { checkStatus, formatShoppingCart } from '../../helpers/api'
import axios from 'axios'

export function addToCart(product) {
  return {
    type: ADD_PRODUCT,
    product,
  }
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_PRODUCT,
    productId,
  }
}

export function updateProduct(product) {
  return {
    type: UPDATE_PRODUCT,
    product,
  }
}


export function submitCheckout(shoppingCart, history) {
  return async (dispatch) => {
    dispatch(getCheckoutPending())

    try {
      const jsonCart = formatShoppingCart(shoppingCart)
      let response = await axios.post('/checkout', jsonCart)
      let data = await checkStatus(response)
      if (data.status === 'success') {
        dispatch(getCheckoutSuccess(data))
        history.push('/success')
      } else {
        dispatch(getCheckoutFailure(data))
      }
    }
    catch (error) {
      if (error.message) {
        let errorObj = { error: error.message }
        dispatch(getCheckoutFailure(errorObj))
      } else {
        dispatch(getCheckoutFailure(error))
      }
    }
  }
}

export function getCheckoutPending() {
  return {
    type: GET_CHECKOUT_PENDING,
  }
}

export function getCheckoutSuccess(response) {
  return {
    type: GET_CHECKOUT_SUCCESS,
    response,
  }
}

export function getCheckoutFailure(response) {
  return {
    type: GET_CHECKOUT_FAILURE,
    response,
  }
}

export function resetCart() {
  return {
    type: RESET_CART,
  }
}
