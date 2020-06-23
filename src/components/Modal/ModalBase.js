import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { scaleUp } from '~/styles/transitions'
import { useEscClose } from '~/hooks'
import { Overlay } from '~/components'
import Paper from '~/components/Paper'

function ModalBase({ children, open, onAnimateEnd, onClose, ...props }) {
  const stopClick = e => e.stopPropagation()

  useEscClose(onClose, open)

  return (
    <Overlay onClick={onClose} onTransitionEnd={onAnimateEnd} className={open ? 'visible' : ''}>
      <Box onClick={stopClick} shadow="xl">
        {children}
      </Box>
    </Overlay>
  )
}

const Box = styled(Paper)`
  z-index: 300;
  max-width: 90%;
  min-width: 300px;
  min-height: 60px;
  animation: ${scaleUp} 0.1s;
`

ModalBase.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  onAnimateEnd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalBase
