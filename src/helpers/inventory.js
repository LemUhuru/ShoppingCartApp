// @flow

/* 
The products {} can't be fully typed, this is due to the use of the lodash method
_mapKeys in the reducer that converts the products array into an object where
each key represents an id for every product {} in the array.
*/

export function getFilteredProductIds(products: {}, filter: Array<string>): Array<string> {
  const productIds: Array<string> = Object.keys(products)
  let filteredProductIds: Array<string> = []

  filter.forEach((tag: string) => {

    for (const id of productIds) {
      const product: { tags: Array<string> } = products[id]
      const productTags = product.tags

      if (productTags.includes(tag)) {
        filteredProductIds.push(id)
      }
    }
  })

  return filteredProductIds
}
