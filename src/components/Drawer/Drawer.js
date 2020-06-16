import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { useOutsideClose } from '~/hooks'
import { Overlay, Portal } from '~/components'
import Paper from './DrawerPaper'

function Drawer({
  children,
  open,
  docked,
  close,
  ...props
}) {
  const paperRef = useRef()

  useOutsideClose(paperRef, open && !docked, close)

  return (
    <Portal selector="#portal-root">
      <Overlay show={open && !docked} />
      <Paper className={open ? 'open' : ''} ref={paperRef} {...props}>
        {children}
      </Paper>
    </Portal>
  )
}

Drawer.defaultProps = {
  position: 'left',
  width: '310px',
}

Drawer.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func.isRequired,
  docked: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  width: PropTypes.string,
}

export default Drawer
