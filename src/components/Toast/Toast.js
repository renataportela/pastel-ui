import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Button, Flex } from '~/components'
import Alert, { ALERT_KINDS } from '~/components/Alert'

function Toast({ actions, closeButton, kind, message, position, remove, ...props }) {
  return (
    <ToastStyle
      kind={kind}
      icon={kind !== 'dark'}
      $position={position}
      {...props}
    >
      <Flex justify="between" alignItems="center" gap="30px">
        <div>{message}</div>
        {closeButton && <Button {...closeButton} onclick={remove} />}
      </Flex>
    </ToastStyle>
  )
}

const ToastStyle = styled(Alert)`
  opacity: 0.9;
  text-align: left;
  font-size: 0.9rem;
  padding: 0.5em 0.8em;    
`

Toast.defaultProps = {
  closeButton: {
    label: 'Close',
    kind: 'secondary',
    variant: 'ghost',
  },
  kind: 'darker',
}

Toast.propTypes = {
  closeButton: PropTypes.object,
  kind: PropTypes.oneOf(ALERT_KINDS).isRequired,
  message: PropTypes.node.isRequired,  
}

export default Toast
