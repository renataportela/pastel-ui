import React from 'react'

import { Svg } from '~/components'

function ChevronRightIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <polyline points="9 18 15 12 9 6"></polyline>
    </Svg>
  )
}

ChevronRightIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default ChevronRightIcon
