import React from 'react'
import PropTypes from 'prop-types'
import { UniversalPortal } from '@jesstelford/react-portal-universal'

function Portal(props) {
  return (
    <UniversalPortal selector={props.selector}>
      {props.children}
    </UniversalPortal>
  )
}

Portal.defaultProps = {
  selector: 'body'
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string,
}

export default Portal
