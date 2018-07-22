import React, { Component } from 'react'

export default class ProductDetailGallery extends Component {
  render() {
    const { images, title } = this.props
    const mainImage = images && images[0]
    const productImages = images.map((image,index) => {
      return <li key={index}><img src={image} alt={title} /></li>
    })

    return (
      <div className="product-img-gallery col-md-6">
        <ul className="product-detail__images">
          {productImages}
        </ul>
        <img className="main-img" src={mainImage} alt={title} />
      </div>
    )
  }
}
