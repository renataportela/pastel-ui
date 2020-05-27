import React from 'react'

import { Svg } from '~/components'

function CheckIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <polyline points="20 6 9 17 4 12"></polyline>
    </Svg>
  )
}

CheckIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default CheckIcon
