// @flow
import * as React from 'react'

type Props = {
  filter: Array<Object>,
  clearFilter: () => void,
}

const RemoveFilterButton = (props:Props): React.Element<'p'> => {
  const { filter, clearFilter } = props

  return (
    <p className="filter-notice">
      <span>Filtered by: {filter.join(',')}</span>
      <input
        onClick={() => clearFilter()}
        type="button"
        value="Remove Filter"
        className="btn btn-warning filter-btn" />
    </p>
  )
}

export default RemoveFilterButton
