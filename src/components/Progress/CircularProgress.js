import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Svg, useTheme } from '~/components'

function CircularProgress({
  bgColor,
  color,
  content,
  percent,
  diameter,
  strokeWidth,
  ...props
}) {
  const { colors } = useTheme()
  const color1 = colors[color] ? colors[color].bg : color
  const color2 = bgColor ? (colors[bgColor] ? colors[bgColor].bg : bgColor) : colors.disabled.bg
  const center = diameter / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const progressOffset = ((100 - percent) / 100) * circumference

  return (
    <Outer $size={diameter} {...props}>
      <Svg width={diameter} height={diameter}>
        <Cicle
          fill="none"
          stroke={color2}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Cicle
          fill="none"
          stroke={color1}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
        />
      </Svg>
      {content && <Content>{content}</Content>}
    </Outer>
  )
}

const Outer = styled.div`
  position: relative;
  display: inline-block;
  width: ${props => props.$size};
`

const Cicle = styled('circle')`
  transition: stroke-dashoffset 850ms ease-in-out;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

CircularProgress.defaultProps = {
  diameter: 50,
  strokeWidth: '4',
}

CircularProgress.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.node,
  percent: PropTypes.number,
  diameter: PropTypes.number.isRequired,
  strokeWidth: PropTypes.string,
}

export default CircularProgress
