import React, { useRef } from 'react'
import styled from 'styled-components'

import { Paper } from '~/components'
import { scale } from '~/styles/transitions'
import Overlay from '~/components/Overlay'
import useOutsideClose from '~/hooks/useOutsideClose'

function ModalBase({ children, close, open, ...props }) {
  const modalBoxRef = useRef()

  useOutsideClose(modalBoxRef, open, close)

  return (
    <OverlayStyle show={open} {...props}>
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
    min-width: 300px;
    min-height: 60px;
    animation: ${scale} 0.1s;
  }
`

export default ModalBase
