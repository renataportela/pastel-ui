import React from 'react'

import { Svg } from '~/components'

function AlertTriangleIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </Svg>
  )
}

AlertTriangleIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default AlertTriangleIcon
