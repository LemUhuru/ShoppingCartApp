import { isObjEmpty } from './utils'
import { NY_SALES_TAX, SHIPPING_PRICE } from '../constants'

export function getCartPrice(shoppingCart = {}) {
  if (!isObjEmpty(shoppingCart)) {
    let products = Object.values(shoppingCart)

    let cartPrice = products.reduce((acc, product) => {
      let { price, qty = 1 } = product
      let totalPrice = parseInt(qty) * parseFloat(price)

      return acc + totalPrice
    }, 0)

    let parsedSalesTax = parseFloat(NY_SALES_TAX.split('%')[0]) / 100
    let totalCartPrice = (cartPrice * parsedSalesTax) + cartPrice + SHIPPING_PRICE

   return totalCartPrice.toFixed(2)
  }

  return 0
}

export function getCartSize(shoppingCart = {}) {
  if (!isObjEmpty(shoppingCart)) {
    let products = Object.values(shoppingCart)

    return products.reduce((acc, product) => {
      let { qty = 1 } = product

      return acc + qty
    }, 0)
  }
  return 0
}

export function getProductFromCart(shoppingCart = {}, productId) {
  if (!isObjEmpty(shoppingCart)) {
    return shoppingCart[productId]
  }
  return {}
}
