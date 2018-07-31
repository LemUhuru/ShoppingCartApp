import { getData } from '../../helpers/api'
import {
  GET_INVENTORY_FAILURE,
  GET_INVENTORY_SUCCESS,
  GET_INVENTORY_PENDING,
  ADD_FILTER,
  CLEAR_FILTER,
  UPDATE_INVENTORY_PRODUCT,
} from './types'

export function getInventory() {
  return (dispatch) => {
    dispatch(getInventoryPending())

    return getData('/get-items')
    .then(inventory => {
      dispatch(getInventorySuccess(inventory))
    })
    .catch(error => {
      dispatch(getInventoryFailure(error))
    })
  }
}

export function getInventoryPending() {
  return {
    type: GET_INVENTORY_PENDING,
  }
}

export function getInventorySuccess(inventory) {
  return {
    type: GET_INVENTORY_SUCCESS,
    payload: inventory,
  }
}

export function getInventoryFailure(error) {
  return {
    type: GET_INVENTORY_FAILURE,
    error,
  }
}

export function addFilter(tag) {
  return {
    type: ADD_FILTER,
    tag,
  }
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER,
  }
}

export function updateInventoryProduct(product) {
  return {
    type: UPDATE_INVENTORY_PRODUCT,
    product,
  }
}
