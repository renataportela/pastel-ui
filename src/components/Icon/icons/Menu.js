import React from 'react'

import { Svg } from '~/components'

function MenuIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </Svg>
  )
}

MenuIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default MenuIcon
