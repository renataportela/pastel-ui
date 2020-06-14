import React, { useRef } from 'react'
import styled from 'styled-components'

import { Paper } from '~/components'
import Overlay from '~/components/Overlay'
import useOutsideClose from '~/hooks/useOutsideClose'

function ModalBase({ children, close, ...props }) {
  const modalBoxRef = useRef()

  useOutsideClose(modalBoxRef, close)

  return (
    <OverlayStyle {...props}>
      <Paper shadow="xl" ref={modalBoxRef}>        
        {children}
      </Paper>
    </OverlayStyle>
  )
}

const OverlayStyle = styled(Overlay)`
  & > div {
    z-index: 300;
    max-width: 90%;
  }
`

export default ModalBase
