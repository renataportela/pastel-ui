import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ModalBase } from '~/components/Modal'
import { Button, Flex, Heading, Portal } from '~/components'

function Dialog({
  actions,
  children,
  closeLabel,
  closeKind,
  closeColor,
  message,
  title,
  ...props
}) {
  if (!props.open) return null

  return (
    <Portal>
      <DialogStyle {...props}>
        {title && <Heading size="4">{title}</Heading>}
        {message}
        <Flex justify="end" alignItems="center" gap="8px" margin="15px 0 0">
          <Button
            label={closeLabel}
            kind={closeKind}
            color={closeColor}
            onClick={props.close}
          />
          {children}
        </Flex>
      </DialogStyle>
    </Portal>
  )
}

const DialogStyle = styled(ModalBase)`
  & > div {
    overflow: ${props => (props.scrollable ? 'auto' : 'hidden')};
    max-height: 90%;
  }

  @media (min-width: 1024px) {
    & > div {
      max-width: 800px;
    }
  }
`

Dialog.defaultProps = {
  closeLabel: 'Close',
  closeColor: 'neutral',
  closeKind: 'ghost',
}

Dialog.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func.isRequired,
  closeLabel: PropTypes.string,
  closeColor: PropTypes.string,
  closeKind: PropTypes.string,
  message: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.node,
  scrollable: PropTypes.bool,
}

export default Dialog
