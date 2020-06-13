import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useTheme from '~/components/Theme/useTheme'

function Svg({ children, color, fill, height, viewBox, width, ...props }) {
  const { colors } = useTheme()
  return (
    <SvgStyle
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={colors[fill] ? colors[fill].bg : fill}
      stroke={colors[color] ? colors[color].bg : color}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </SvgStyle>
  )
}

const SvgStyle = styled.svg`
  overflow: hidden;
  vertical-align: middle;
`;

Svg.defaultProps = {
  children: PropTypes.node,
  color: 'currentColor',
  fill: 'none',
  height: '24px',
  size: null,
  strokeWidth: 2,
  width: '24px',
}

Svg.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  height: PropTypes.string,
  strokeWidth: PropTypes.number,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default Svg
