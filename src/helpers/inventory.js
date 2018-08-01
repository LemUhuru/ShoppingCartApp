export function getFilteredProductIds(products, filter) {
  const productIds = Object.keys(products)
  let filteredProductIds = []

  filter.forEach(tag => {
    for (let id of productIds) {
      if (products[id].tags.includes(tag)) {
        filteredProductIds.push(id)
      }
    }
  })

  return filteredProductIds
}
