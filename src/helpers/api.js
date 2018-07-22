import axios from 'axios'
import { isObjEmpty } from './utils'

export async function getData(url) {
  try {
    let response = await axios.get(url)
    let data = await checkStatus(response)
    return data
  }
  catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

export function checkStatus(response) {
  const { status } = response

  if (status === 200 || status === 'success') {
    return Promise.resolve(response.data)
  }

  return Promise.reject(response.data)
}



export function formatShoppingCart(shoppingCart = {}) {
  let cartItems =  {
    items: []
  }

  if (!isObjEmpty(shoppingCart)) {
    for (let [key, value] of Object.entries(shoppingCart)) {
      cartItems.items.push({[key]: value})
    }
  } else {
    throw new Error("Shopping Cart is Empty")
  }

  return cartItems
}
