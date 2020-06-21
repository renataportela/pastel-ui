import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { scaleDown, scaleUp } from '~/styles/transitions'
import { Overlay } from '~/components'
import Paper from '~/components/Paper'

function ModalBase({ children, isOpen, shouldAnimate, onAnimateEnd, onClose, ...props }) {
  const stopClick = e => e.stopPropagation();

  useLayoutEffect(() => {
    const handleEsc = e => e.key === 'Escape' && onClose();
    document.addEventListener('keyup', handleEsc);

    return () => {
      document.removeEventListener('keyup', handleEsc);
    }
  }, [onClose]);

  return (
    <Overlay onClick={onClose} onTransitionEnd={onAnimateEnd} className={shouldAnimate ? 'visible' : ''}>
      <Box onClick={stopClick} className={isOpen && !shouldAnimate ? 'closing' : ''} shadow="xl">
        {children}
      </Box>
    </Overlay>
  )
}

const Box = styled(Paper)`
  z-index: 300;
  max-width: 90%;
  min-width: 300px;
  min-height: 60px;
  animation: ${scaleUp} 0.1s;

  .closing {
    animation: ${scaleDown} 0.1s;
  }
`

ModalBase.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  shouldAnimate: PropTypes.bool.isRequired,
  onAnimateEnd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalBase
