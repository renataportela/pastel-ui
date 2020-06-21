import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Portal } from '~/components'
import ToastContext from './context'
import Toaster from './Toaster'

function withToastProvider(Component, position = 'topRight') {
  function WithToastProvider(props) {
    const [toasts, setToasts] = useState([])
    const addToast = toastProps => {
      const id = generateUID()
      setToasts([...toasts, { id, ...toastProps }])
    }
    const removeToast = id => setToasts(toasts.filter(t => t.id !== id))

    return (
      <ToastContext.Provider value={{ addToast, removeToast }}>
        <Component {...props} />

        <Portal>
          <Toasts $position={position}>
            {toasts.map(({ id, ...toastProps }) => (
              <Toaster key={id} onRemove={() => removeToast(id)} {...toastProps} />
            ))}
          </Toasts>
        </Portal>
      </ToastContext.Provider>
    )
  }

  return WithToastProvider
}

function generateUID() {
  return (new Date).toUTCString() + (Math.random() * 10);
}

const Toasts = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${props => positions[props.$position]}

  & > div {
    max-width: 300px;
    z-index: 400;
  }
`

const PADDING = '15px'
const positions = {
  topCenter: `
    top: ${PADDING};
    width: 100%;
    align-items: center;
  `,
  topLeft: `
    top: ${PADDING};
    left: ${PADDING};
    align-items: flex-start;
  `,
  topRight: `
    top: ${PADDING};
    right: ${PADDING};
    align-items: flex-end;
  `,
  bottomCenter: `
    bottom: ${PADDING};
    width: 100%;
    align-items: center;
  `,
  bottomLeft: `
    bottom: ${PADDING};
    left: ${PADDING};
    align-items: flex-start;
  `,
  bottomRight: `
    bottom: ${PADDING};
    right: ${PADDING};
    align-items: flex-end;
  `,
}

withToastProvider.propTypes = {
  position: PropTypes.oneOf([
    'topCenter',
    'topLeft',
    'topRight',
    'bottomCenter',
    'bottomLeft',
    'bottomRight',
  ]),
}

export default withToastProvider
