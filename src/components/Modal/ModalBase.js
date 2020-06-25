import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { scaleUp } from '~/styles/transitions'
import { useEscClose } from '~/hooks'
import { Overlay } from '~/components'
import Paper from '~/components/Paper'

function ModalBase({ children, open, onClose }) {
  // useOutsideClickClose doesn't work properly if a second modal is open
  // so I stop the propagation if the overlay is clicked and capture the esc keypress
  const onStopClick = e => e.stopPropagation()

  useEscClose(onClose, open)

  return (
    <Overlay onClick={onClose} className={open ? 'show' : ''}>
      <Box onClick={onStopClick} shadow="xl" className={open ? 'show' : ''}>
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
  opacity: 0;
  display: none;
  transition: opacity .2s ease-in-out, visibility .2s linear;
  z-index: 800;

  &.show {
    display: inline-block;
    opacity: 1;
    animation: ${scaleUp} .1s;
  }
`

ModalBase.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalBase
