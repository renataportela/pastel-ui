import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Toast from './Toast'

function Toaster({
  duration,
  remove,
  ...props
}) {
  const removeRef = useRef()
  removeRef.current = remove

  useEffect(() => {
    const id = setTimeout(() => removeRef.current(), duration)
    return () => clearTimeout(id)
  }, [])

  return (
    <Toast remove={remove} {...props} />
  )
}

Toaster.defaultProps = {
  duration: 3000,
}

Toaster.propTypes = {
  duration: PropTypes.number,
}

export default Toaster
