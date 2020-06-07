import React from 'react'

import Button from './Button'

function Close(props) {
  return (
    <Button icon="x" round variant="ghost" {...props} />
  )
}

Close.defaultProps = {
  kind: 'neutral',
}

export default Close