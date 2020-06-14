import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import usePortal from '~/hooks/usePortal'
import { ModalBase } from '~/components/Modal'
import { Button, Flex, Heading } from '~/components'

function Dialog({
  actions,
  children,
  isOpen,
  close,
  closeLabel,
  closeKind,
  closeVariant,
  message,
  title,
  ...props
}) {
  const el = usePortal()

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <Modal close={close} {...props}>
      {title && <Heading size="4">{title}</Heading>}
      {message}
      <Flex justify="end" alignItems="center" gap="8px" margin="15px 0 0">
        <Button
          label={closeLabel}
          kind={closeKind}
          variant={closeVariant}
          onClick={close}
        />
        {children}
      </Flex>
    </Modal>,
    el
  )
}

const Modal = styled(ModalBase)`
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
  closeVariant: 'default',
  closeKind: 'neutral',
}

Dialog.propTypes = {
  children: PropTypes.node,
  closeLabel: PropTypes.string,
  closeVariant: PropTypes.string,
  closeKind: PropTypes.string,
  message: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.node,
  scrollable: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
}

export default Dialog
