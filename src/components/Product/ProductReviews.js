import React, { Component } from 'react'

export default class ProductReview extends Component {


  render() {
    const { reviews } = this.props
    const productReviews = reviews.map((review,index) => {
      const { title , body, rating, author } = review

      return (
        <li className="well" key={index}>
          <p className="review-author"> {author}</p>
          <p>
            <span className="review-rating badge">{rating}</span>
            <span className="review-title">{title}</span>
          </p>
          <p className="review-body">{body}</p>
        </li>
      )
    })

    return (
      <div className="product-detail__reviews">
        <h3>Reviews</h3>
        <ul>
          {productReviews}
        </ul>
      </div>

    )
  }
}