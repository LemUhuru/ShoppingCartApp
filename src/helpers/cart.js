// @flow
import { isObjEmpty } from './utils'
import { NY_SALES_TAX, SHIPPING_PRICE } from '../constants'

export function getCartPrice(shoppingCart: {} = {}): number {
  const getTotalCartPrice = (acc: number, product: { price: number, qty: number }) => {
    let { price, qty = 1 } = product
    let totalPrice = parseInt(qty, 10) * parseFloat(price)

    return acc + totalPrice
  }

  if (!isObjEmpty(shoppingCart)) {
    let products: Array<Object> = Object.values(shoppingCart)

    let cartPrice: number = products.reduce(getTotalCartPrice, 0)

    let parsedSalesTax = parseFloat(NY_SALES_TAX.split('%')[0]) / 100
    let totalCartPrice = (cartPrice * parsedSalesTax) + cartPrice + SHIPPING_PRICE

    let parsedPrice = parseFloat(totalCartPrice.toFixed(2))
    
    return parsedPrice
  }

  return 0
}

export function getCartSize(shoppingCart: {} = {}) {
  const getTotalCartSize = (acc: number, product: { qty: number }): number => {
    let { qty = 1 } = product
    
    return acc + qty
  }
  
  if (!isObjEmpty(shoppingCart)) {
    let products: Array<Object> = Object.values(shoppingCart)

    return products.reduce(getTotalCartSize, 0)
  }

  return 0
}

export function getProductFromCart(shoppingCart: { productId: string }, productId: string): Object {
  if (!isObjEmpty(shoppingCart)) {
    return shoppingCart[productId] // Not sure how to type this.
  }

  return {}
}
