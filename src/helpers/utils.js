// @flow
function formatCurrency(amount: number): string {
  return `$${amount}`
}

// Should obj.constructor be typed?

function isObjEmpty(obj: {}): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export {
  formatCurrency,
  isObjEmpty,
}