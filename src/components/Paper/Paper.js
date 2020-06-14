import React from 'react'
import styled from 'styled-components'

import { useTheme } from '~/components'
import {
  shadowXs,
  shadowSm,
  shadowMd,
  shadowLg,
  shadowXl,
} from '~/styles/shadows'

function Paper(
  {
    children,
    bgColor = 'white',
    borderColor = 'sub',
    gutter = '15px',
    shadow = 'md',
    textColor,
    ...props
  },
  ref
) {
  const { colors } = useTheme()

  const resolveColor = propColor =>
    propColor ? (colors[propColor] ? colors[propColor].bg : propColor) : null
  const bg = resolveColor(bgColor)
  const color = resolveColor(textColor)
  const border = resolveColor(borderColor)

  return (
    <PaperStyle
      ref={ref}
      $bg={bg}
      $color={color}
      $border={border}
      gutter={gutter}
      shadow={shadow}
      {...props}
    >
      {children}
    </PaperStyle>
  )
}

const shadows = {
  xs: shadowXs,
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
  xl: shadowXl,
}

const PaperStyle = styled.div(props => ({
  position: 'relative',
  boxShadow: props.shadow ? shadows[props.shadow] : null,
  backgroundColor: props.$bg,
  color: props.$color,
  padding: props.gutter,
  border: '1px solid ' + props.$border,
}))

// Paper.propTypes = {
//   bgColor: PropTypes.string,
//   gutter: PropTypes.string,
//   borderColor: PropTypes.string,
//   shadow: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
//   textColor: PropTypes.string,
// }

export default React.forwardRef(Paper)
