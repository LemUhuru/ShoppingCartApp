import React from 'react'

const ErrorBanner = ({ errorMsg }) => {
  return (
    <div class="alert alert-danger" role="alert">
      {errorMsg}
    </div>
  )
}


export default ErrorBanner
