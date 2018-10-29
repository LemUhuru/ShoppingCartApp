import * as React from 'react'

type Props = {
    reviews: Array<Object>
}

const ProductReviewList = (props: Props): React.Element<'ul'> => {
    const { reviews } = props

    return (
    <ul>
        {
            reviews.map((review, index: number) => {
                const { title, body, rating, author } = review

                return ( 
                <li className="well" key={index}>
                    <p className="review-author"> {author}</p>
                    <p>
                        <span className="review-rating badge">{rating}</span>
                        <span className="review-title">{title}</span>
                    </p>
                    <p className="review-body">{body}</p>
                </li>)
                })
        }
    </ul>
    )
}

export default ProductReviewList