// @flow
import * as React from 'react'

type Props = {
  images: Array<string>, 
  title?: string
}

const ProductDetailGallery = (props: Props): React.Element<'div'> => {
  const { images, title } = props
  const mainImage = images && images[0]
  const productImages: Array<React.Element<'li'>> = images.map((image: string, index: number) => {
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


export default ProductDetailGallery
