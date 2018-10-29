// @flow
import * as React from 'react'

type Props = {
  tags: Array<string>,
  addFilter: (tag: string) => void,
  history: { push: (path: string) => void }
}

const ProductTagList = (props: Props): React.Element<'ul'> => {
  const { tags, addFilter, history } = props

  const handleClick = (event: SyntheticInputEvent<HTMLElement>) => {
    const { innerHTML } = (event.target: HTMLElement)
    
    addFilter(innerHTML)
    history.push('/')
  }

  return (
    <ul onClick={handleClick}>
      {tags.map((tag, index) => {
        return <li key={index} className="product-tag label label-default ">{tag}</li>
      })}
    </ul>
  )
}


export default ProductTagList