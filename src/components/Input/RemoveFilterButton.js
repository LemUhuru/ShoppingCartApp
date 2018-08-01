import React from 'react'
import PropTypes from 'prop-types'

const RemoveFilterButton = ({ filter, clearFilter }) => {
  return (
    <p className="filter-notice">
      <span>Filtered by: {filter.join(',')}</span>
      <input
        onClick={() => this.props.clearFilter()}
        type="button"
        value="Remove Filter"
        className="btn btn-warning filter-btn" />
    </p>
  )
}

RemoveFilterButton.propTypes = {
  filter: PropTypes.array.isRequired,
  clearFilter: PropTypes.func.isRequired,
}

export default RemoveFilterButton
