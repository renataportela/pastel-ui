import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { useEscClose } from '~/hooks'
import { Overlay, Portal } from '~/components'
import Paper from './DrawerPaper'

function Drawer({ children, open, docked, onClose, ...props }) {
  const paperRef = useRef()

  useEscClose(onClose, open)

  return (
    <Portal>
      {!docked && <Overlay onClick={onClose} className={open ? 'show' : ''} />}

      <Paper
        className={open ? 'show' : ''}
        ref={paperRef}
        {...props}
      >
        {children}
      </Paper>
    </Portal>
  )
}

Drawer.defaultProps = {
  position: 'left',
  width: '400px',
}

Drawer.propTypes = {
  children: PropTypes.node,
  docked: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  width: PropTypes.string,
}

export default Drawer
