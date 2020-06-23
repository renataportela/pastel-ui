import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Flex } from '~/components'
import Alert from '~/components/Alert'

function Toast({ actions, closeButton, color, message, position, onRemove, ...props }) {
  return (
    <ToastStyle
      kind={color}
      $position={position}
      onClose={onRemove}
      {...props}
    >
      <Flex justify="between" alignItems="center" gap="30px">
        <div>{message}</div>
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
  color: 'dark',
}

Toast.propTypes = {
  color: Alert.propTypes.kind,
  message: PropTypes.node.isRequired,  
  onRemove: PropTypes.func.isRequired,
}

export default Toast
