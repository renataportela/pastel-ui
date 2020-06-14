import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors } from '~/components/Theme'
import { Close } from '~/components/Button'
import Icon from '~/components/Icon'

function Alert({ children, icon, kind, onClose, ...props}) {
  return (
    <Outer pallete={kind} light={kind !== 'darker'} {...props}>
      {icon && <AlertIcon name={icons[kind]} />}
      {children}
      {onClose && <CloseButton kind={kind} size="sm" onClick={onClose} />}
    </Outer>
  )
}

const Outer = styled(BaseColors)`
  padding: .7em .9em;
  border-radius: 4px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: left;
  align-items: center;  
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
  darker: 'info',
};

export const ALERT_KINDS = ['success', 'warning', 'danger', 'info', 'darker']

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  kind: PropTypes.oneOf(ALERT_KINDS).isRequired,
  onClose: PropTypes.func,
}

export default Alert