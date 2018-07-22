import _ from 'lodash'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  RESET_CART,
  GET_CHECKOUT_FAILURE,
  GET_CHECKOUT_SUCCESS,
  GET_CHECKOUT_PENDING,
} from './types'

const INITIAL_STATE = {
  shoppingCart: {},
  isSubmitted: false,
  isPending: false,
  successMsg: '',
  errorMsg: '',
  isError: false,
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        isError: false,
        isSubmitted: false,
        shoppingCart: {...state.shoppingCart,
          [action.product.id]: action.product
        },
      }

    case REMOVE_PRODUCT:
     return {
       ...state,
       isSubmitted: false,
       shoppingCart: _.omit(state.shoppingCart, action.productId)
     }

    case UPDATE_PRODUCT:
      return {
        ...state,
        isSubmitted: false,
        shoppingCart: {...state.shoppingCart,
          [action.product.id]: action.product
        }
      }

    case GET_CHECKOUT_PENDING:
      return {
        ...state,
        isPending: true,
        isSubmitted: false,
      }

    case GET_CHECKOUT_SUCCESS:
      return {
        ...state,
        isSubmitted: true,
        isPending: false,
        successMsg: action.response.message,
        isError: false,
      }

    case GET_CHECKOUT_FAILURE:
      return {
        ...state,
        isSubmitted: false,
        isPending: false,
        successMsg: '',
        isError: true,
        errorMsg: action.response.error,
      }

    case RESET_CART:
      return {
        ...state,
        shoppingCart: {},
        isSubmitted: false,
        totalPrice: '',
      }

    default:
      return state
    }
  }
