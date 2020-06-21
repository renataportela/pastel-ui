import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Toast from './Toast'

function Toaster({ duration, ...props }) {
  const removeRef = useRef()
  removeRef.current = props.onRemove

  useEffect(() => {
    const id = setTimeout(() => removeRef.current(), duration)
    return () => clearTimeout(id)
  }, [])

  return (
    <Toast {...props} />
  )
}

Toaster.defaultProps = {
  duration: 4000,
}

Toaster.propTypes = {
  duration: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
}

export default Toaster
