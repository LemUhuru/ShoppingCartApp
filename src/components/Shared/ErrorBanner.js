import React from 'react'
import PropTypes from 'prop-types'

const ErrorBanner = ({ errorMsg }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMsg}
    </div>
  )
}

ErrorBanner.propTypes = {
  errorMsg: PropTypes.string.isRequired,
}

export default ErrorBanner
