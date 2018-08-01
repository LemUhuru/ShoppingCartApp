import React from 'react'
import PropTypes from 'prop-types'

const ProductDetailGallery = ({ images, title }) => {
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

ProductDetailGallery.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string,
}


export default ProductDetailGallery
