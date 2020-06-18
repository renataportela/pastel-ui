import React from 'react'
import PropTypes from 'prop-types'

import * as Icons from './icons'
import { ICON_COMPONENTS, AVAILABLE_ICONS } from '~/constants'

function Icon({ children, name, ...props }) {
  const ChosenIcon = Icons[ICON_COMPONENTS[name]];

  if (!ChosenIcon) return null;
  
  return <ChosenIcon {...props}>{children}</ChosenIcon>
}

Icon.defaultProps = {
  children: null,
}

Icon.propTypes = {
  children: PropTypes.node,
  name: PropTypes.oneOf(AVAILABLE_ICONS).isRequired,
}

AVAILABLE_ICONS.forEach(name => {
  const compName = ICON_COMPONENTS[name]
  Icon[compName] = Icons[compName]
})

export default Icon
