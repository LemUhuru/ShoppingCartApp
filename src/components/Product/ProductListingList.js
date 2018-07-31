import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuantityField from '../Input/QuantityField'
import { formatCurrency } from '../../helpers/utils'
import AddToCartButton from '../Input/AddToCartButton'
import { getFilteredProductIds } from '../../helpers/inventory'

export default class ProductListingList extends Component {
  render() {
    const { products, filter = [] } = this.props
    const productIds = Object.keys(products)

    let currentProductIds = []

    if (filter.length > 0) {
       currentProductIds = getFilteredProductIds(products, filter)
    } else {
       currentProductIds = productIds
    }

    return (
      <ul className="product-list">
        {currentProductIds.map(id => {
          const product = products[id]
          const { title, thumbnail, price, inStock } = product

          return (
            <li className="thumbnail" key={id}>
              <img src={`${thumbnail}`} alt={`${title}`} />
              <div className="caption">
                <Link
                  to={`/detail/${id}`}
                  className="thumbnail">
                  <h3 className="product-listing__title">{title}</h3>
                </Link>
                <span className="product-listing__price label label-success">{`${formatCurrency(price)}`}</span>
                <p>
                  <AddToCartButton
                    product={product}
                    inStock={inStock}
                  />
                  <QuantityField
                    product={product}
                    useCart={false}
                  />
                </p>
              </div>
            </li>)
         })}
      </ul>
    )
  }
}
