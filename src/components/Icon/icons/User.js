import React from 'react'

import { Svg } from '~/components'

function UserIcon({ children, ...props }) {
  return (
    <Svg {...props}>
      {children}
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </Svg>
  )
}

UserIcon.defaultProps = {
  children: null,
  viewBox: '0 0 24 24',
}

export default UserIcon
