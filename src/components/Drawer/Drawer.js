import React, { useState, useRef } from 'react'
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

  let classNames = open ? 'open ' : ''

  const handleTransitionEnd = () => {
    console.log('end');
  }

  return (
    <Portal>
      <Overlay className={open ? 'visible' : ''} OnTransitionEnd={handleTransitionEnd} show={open && !docked}>
        <Paper className={classNames} ref={paperRef} {...props}>
          {children}
        </Paper>
      </Overlay>
    </Portal>
  )
}

Drawer.defaultProps = {
  position: 'left',
  width: '400px',
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
