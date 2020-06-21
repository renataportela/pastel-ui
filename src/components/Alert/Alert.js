import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors } from '~/components/Theme'
import { Close } from '~/components/Button'
import Icon from '~/components/Icon'

function Alert({ children, icon, kind, onClose, ...props}) {
  const color = kind === 'dark' ? 'darker' : kind + 'Alt'
  return (
    <Outer color={color} {...props}>
      <Content>
        {icon && <AlertIcon name={ALERT_ICONS[kind]} />}
        {children}
      </Content>
      
      {onClose && <CloseButton inverse={kind === 'dark'} size="sm" onClick={onClose} />}
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

const Content = styled.div`
  float: left;
  flex: 1;
`

const CloseButton = styled(Close)`
  float: right;
  margin-left: .9rem;
`;

const AlertIcon = styled(Icon)`
  margin-right: .9rem;
`

const ALERT_ICONS = {
  danger: 'warning',
  info: 'info',
  success: 'check',
  warning: 'warning',
  dark: 'info',
}

export const ALERT_COLORS = ['success', 'warning', 'danger', 'info', 'dark']

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  kind: PropTypes.oneOf(ALERT_COLORS).isRequired,
  onClose: PropTypes.func,
}

export default Alert