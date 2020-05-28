import React from 'react'

import { Svg } from '~/components'

function InfoIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </Svg>
  )
}

InfoIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default InfoIcon
