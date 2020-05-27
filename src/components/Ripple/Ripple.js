import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useTheme from '~/components/Theme/useTheme'

function Ripple({ color, duration }) {
  const theme = useTheme()
  const bgColor = theme.colors[color] || color
  const [rippleArray, setRippleArray] = useState([])

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([])
  })

  const addRipple = event => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    const x = event.pageX - window.scrollX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - window.scrollY - rippleContainer.y - rippleContainer.height / 2;
    const newRipple = { x, y, size }

    setRippleArray(prevState => [...prevState, newRipple])
  }  

  return (
    <RippleContainer duration={duration} bgColor={bgColor} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'ripple_' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          )
        })}
    </RippleContainer>
  )
}

const RippleContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;

  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.4;
    animation-name: ripple;
    background-color: ${props => props.bgColor};
    animation-duration: ${props => props.duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useLayoutEffect(() => {
    let bounce = null
    if (rippleCount > 0) {
      clearTimeout(bounce)

      bounce = setTimeout(() => {
        cleanUpFunction()
        clearTimeout(bounce)
      }, duration * 4)
    }

    return () => clearTimeout(bounce)
  }, [rippleCount, duration, cleanUpFunction])
}

Ripple.defaultProps = {
  color: 'currentColor',
  duration: 600,
};

Ripple.propTypes = {
  color: PropTypes.string,
  duration: PropTypes.number,
};

export default Ripple
