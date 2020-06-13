import React from 'react'

import { Icon, Overlay } from '~/components'

function PageLoading({ color, ...props}) {
  return (
    <Overlay {...props}>
      <Icon name="loader" width="2.5rem" height="2.5rem" color={color} />
    </Overlay>
  )
}

PageLoading.defaultProps = {
  color: 'secondary',
}

export default PageLoading