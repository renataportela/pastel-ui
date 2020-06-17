import React from 'react'

import { Svg } from '~/components'

function ChevronsRightIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </Svg>
  )
}

ChevronsRightIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default ChevronsRightIcon
