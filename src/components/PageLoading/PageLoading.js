import React from 'react'
import styled from 'styled-components'

import { Icon, Overlay } from '~/components'

function PageLoading({ color, ...props}) {
  return (
    <Overlay {...props}>
      <IconStyle name="loader" width="2.5rem" height="2.5rem" color={color} />
    </Overlay>
  )
}

const IconStyle = styled(Icon)`
  z-index: 201;
`

PageLoading.defaultProps = {
  color: 'info',
}

export default PageLoading