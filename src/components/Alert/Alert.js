import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors } from '~/components/Theme'
import Icon from '~/components/Icon'
import { Close } from '~/components/Button'

const Outer = styled(BaseColors)`
  padding: .7rem .9rem;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: baseline;
`;

const CloseButton = styled(Close)`
  position: absolute;
  right: .5rem;
  top: .7rem;
  margin-left: .9rem;
`;

const AlertIcon = styled(Icon)`
  margin-right: .9rem;
`;

const icons = {
  danger: 'warning',
  info: 'info',
  success: 'check',
  warning: 'warning',
};

function Alert({ children, icon, kind, onClose, ...props}) {
  return (
    <Outer bgColor={kind} {...props}>
      {icon && <AlertIcon name={icons[kind]} />}
      {children}        
      {onClose && <CloseButton size="sm" onClick={onClose} />}
    </Outer>
  )
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  onClose: PropTypes.func,
  kind: PropTypes.oneOf(['success', 'warning', 'danger', 'info']).isRequired,
}

export default Alert