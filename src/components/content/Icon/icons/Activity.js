import React from 'react'

import { Svg } from '~/components'

function ActivityIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </Svg>
  )
}

ActivityIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default ActivityIcon
