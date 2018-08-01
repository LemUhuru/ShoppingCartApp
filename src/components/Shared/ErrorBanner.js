import React from 'react'

const ErrorBanner = ({ errorMsg }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMsg}
    </div>
  )
}


export default ErrorBanner
