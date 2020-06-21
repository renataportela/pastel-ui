import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useToggleAnimation } from '~/hooks'
import { Portal } from '~/components'
import Close from '~/components/Button/Close'
import ModalBase from './ModalBase'

function Modal({ children, open, onClose, ...props }) {
  const [animate, onAnimateClose, onTransitionEnd] = useToggleAnimation(open, onClose)

  useLayoutEffect(() => {
    // not scroll the body while the modal is open
    document.body.style.position = open ? 'fixed' : 'static'
    // compensates the scrollbar width
    document.body.style.paddingRight = open ? '15px' : '0'
  }, [open])

  if (!open) return null

  return (
    <Portal selector="#modal-root">
      <ModalStyle isOpen={open} shouldAnimate={animate} onClose={onAnimateClose} onAnimateEnd={onTransitionEnd}>
        <CloseButton onClick={onAnimateClose} />
        {children}
      </ModalStyle>
    </Portal>
  )
}

const ModalStyle = styled(ModalBase)`
  & > div {
    overflow: auto;
  }
`

const CloseButton = styled(Close)`
  position: absolute;
  top: 8px;
  right: 8px;
  margin-bottom: 15px;
  margin-left: 15px;
`

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
