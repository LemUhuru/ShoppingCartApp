import * as React from 'react'

type Props = {
  errorMsg: string,
}

const ErrorBanner = (props: Props): React.Element<'div'> => {
  const { errorMsg } = props

  return (
    <div className="alert alert-danger" role="alert">
      {errorMsg}
    </div>
  )
}

export default ErrorBanner
