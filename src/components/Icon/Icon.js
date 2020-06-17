import React from 'react'
import PropTypes from 'prop-types'

import * as Icons from './icons'

export const iconNames = {
  activity: 'Activity',
  arrowUp: 'ArrowUp',
  check: 'Check',
  'chevron-left': 'ChevronLeft', 
  'chevron-right': 'ChevronRight', 
  'chevrons-left': 'ChevronsLeft', 
  'chevrons-right': 'ChevronsRight', 
  info: 'Info',
  loader: 'Loader',
  loading: 'Loader',
  menu: 'Menu',
  user: 'User',
  x: 'X',
  warning: 'AlertTriangle',
}

function Icon({ children, name, ...props }) {
  const ChosenIcon = Icons[iconNames[name]];

  if (!ChosenIcon) return null;
  
  return <ChosenIcon {...props}>{children}</ChosenIcon>
}

Icon.defaultProps = {
  children: null,
}

Icon.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
}

Object.keys(iconNames).forEach(name => {
  const compName = iconNames[name]
  Icon[compName] = Icons[compName]
})

export default Icon
