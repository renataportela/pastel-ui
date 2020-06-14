import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { scale } from '~/styles/transitions'
import { Close, Overlay, Paper } from '~/components'
import useOutsideClose from '~/hooks/useOutsideClose'

const modalRoot = document.getElementById('modal-root')

function Modal(props) {
  const [el] = useState(document.createElement('div'))
  const modalBoxRef = useRef()
  const close = () => props.setOpen(false)

  useOutsideClose(modalBoxRef, close)

  useEffect(() => {
    modalRoot.appendChild(el)
    return () => modalRoot.removeChild(el)
  }, [])

  if (!props.open) return null

  if (props.open) {
    return ReactDOM.createPortal(
      <Overlay>
        <Centered>
          <Paper shadow="xl" ref={modalBoxRef}>
            <CloseContainer>
              <Close onClick={close} />
            </CloseContainer>
            {props.children}
          </Paper>
        </Centered>
      </Overlay>,
      el
    )
  }
}

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300;

  & > div {
    min-width: 300px;
    max-width: 90%;
    animation: ${scale} 0.1s;

    @media (min-width: 778px) {
      min-width: 600px;
    }
  }
`

const CloseContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  margin-bottom: 15px;
  margin-left: 15px;
`

export default Modal
