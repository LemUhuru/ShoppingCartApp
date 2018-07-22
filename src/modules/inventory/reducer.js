import _ from 'lodash'

import {
  GET_INVENTORY_PENDING,
  GET_INVENTORY_FAILURE,
  GET_INVENTORY_SUCCESS,
  ADD_FILTER,
  CLEAR_FILTER,
  UPDATE_INVENTORY_PRODUCT,
} from './types'

const INITIAL_STATE = {
  products: {},
  isLoading: false,
  hasError: false,
  errorMessage: '',
  filter: [],
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case GET_INVENTORY_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }

    case GET_INVENTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        products: _.mapKeys(action.payload, 'id')
      }

    case GET_INVENTORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.error,
      }

    case ADD_FILTER:
      return {
        ...state,
        filter: [...state.filter, action.tag]
      }

    case CLEAR_FILTER:
      return {
        ...state,
        filter: [],
      }

    case UPDATE_INVENTORY_PRODUCT:
      return {
        ...state,
        products: {...state.products, [action.product.id]: action.product},
      }

    default:
      return state
  }
}
