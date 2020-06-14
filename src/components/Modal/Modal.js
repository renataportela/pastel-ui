import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { scale } from '~/styles/transitions'
import usePortal from '~/hooks/usePortal'
import Close from '~/components/Button/Close'
import ModalBase from './ModalBase'

function Modal({ children, open, setOpen, ...props }) {
  const el = usePortal()
  const close = () => setOpen(false)

  useLayoutEffect(() => {
    // not scroll the body while the modal is open
    document.body.style.position = open ? 'fixed' : 'static';
    // compensates the scrollbar width
    document.body.style.paddingRight = open ? '15px' : '0';
  }, [open]);

  return ReactDOM.createPortal(
    <ModalStyle className={open ? 'open' : ''} close={close} {...props}>
      <CloseButton onClick={close} />
      {children}
    </ModalStyle>,
    el
  )
}

const ModalStyle = styled(ModalBase)`
  display: none;

  &.open {
    display: flex;
  }

  & > div {
    min-width: 300px;
    animation: ${scale} 0.1s;
    overflow: auto;
  }

  @media (min-width: 778px) {
    & > div {
      min-width: 600px;
    }
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
  setOpen: PropTypes.func.isRequired,
}

export default Modal
