export function formatCurrency(amount) {
  return `$${amount}`
}

export function isObjEmpty(obj = {}) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
