import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Button, Flex } from '~/components'
import Alert from '~/components/Alert'

function Toast({ actions, closeButton, color, message, position, onRemove, ...props }) {
  return (
    <ToastStyle
      color={color}
      icon={color !== 'dark'}
      $position={position}
      {...props}
    >
      <Flex justify="between" alignItems="center" gap="30px">
        <div>{message}</div>
        {closeButton && <Button {...closeButton} onClick={onRemove} />}
      </Flex>
    </ToastStyle>
  )
}

const ToastStyle = styled(Alert)`
  opacity: 0.9;
  text-align: left;
  font-size: 0.9rem;
  padding: 0.5em 0.5em 0.5em 0.8em;  
`

Toast.defaultProps = {
  closeButton: {
    label: 'Close',
    color: 'secondary',
    kind: 'ghost',
  },
  color: 'darker',
}

Toast.propTypes = {
  closeButton: PropTypes.object,
  color: Alert.propTypes.color,
  message: PropTypes.node.isRequired,  
  onRemove: PropTypes.func.isRequired,
}

export default Toast
