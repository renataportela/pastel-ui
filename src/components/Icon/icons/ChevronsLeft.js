import React from 'react'

import { Svg } from '~/components'

function ChevronsLeftIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <polyline points="11 17 6 12 11 7"></polyline>
      <polyline points="18 17 13 12 18 7"></polyline>
    </Svg>
  )
}

ChevronsLeftIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default ChevronsLeftIcon
