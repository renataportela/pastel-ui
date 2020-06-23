import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useToggleAnimation } from '~/hooks'
import { ModalBase } from '~/components/Modal'
import { Button, Flex, Heading, Portal } from '~/components'

function Dialog({
  actions,
  children,
  onClose,
  closeLabel,
  closeKind,
  closeColor,
  message,
  open,
  scrollable,
  title,
  ...props
}) {
  const [animate, onAnimateClose, onTransitionEnd] = useToggleAnimation(
    open,
    onClose
  )

  if (!open) return null

  return (
    <Portal>
      <DialogStyle
        $scrollable={scrollable}
        open={animate}
        onAnimateEnd={onTransitionEnd}
        onClose={onAnimateClose}
        {...props}
      >
        {title && <Heading size="4">{title}</Heading>}
        {message}
        <Flex justify="end" alignItems="center" gap="8px" margin="15px 0 0">
          <Button
            label={closeLabel}
            kind={closeKind}
            color={closeColor}
            onClick={onAnimateClose}
          />
          {children}
        </Flex>
      </DialogStyle>
    </Portal>
  )
}

const DialogStyle = styled(ModalBase)`
  & > div {
    overflow: ${props => (props.$scrollable ? 'auto' : 'hidden')};
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
  closeLabel: PropTypes.string,
  closeColor: PropTypes.string,
  closeKind: PropTypes.string,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.node,
  scrollable: PropTypes.bool,
}

export default Dialog
