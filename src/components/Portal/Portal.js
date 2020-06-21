import { useLayoutEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function Portal(props) {
  const el = useRef(document.createElement('div'))

  useLayoutEffect(() => {
    if (el.current) {
      const portal = document.querySelector(props.selector)
      portal.append(el.current)
      return () => portal.removeChild(el.current)
    }
  }, [el])

  if (!el.current) return null

  return ReactDOM.createPortal(props.children, el.current)
}

Portal.defaultProps = {
  selector: 'body'
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  selector: PropTypes.string,
}

export default Portal
