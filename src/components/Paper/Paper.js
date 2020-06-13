import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useTheme } from '~/components'
import { Flex } from '~/components/Grid'
import { shadowXs, shadowSm, shadowMd, shadowLg } from '~/styles/shadows'

function Paper({ children, bgColor, borderColor, textColor, ...props }) {
  const { colors } = useTheme()
  
  const resolveColor = propColor => propColor ? (colors[propColor] ? colors[propColor].bg : propColor) : null;
  const bg = resolveColor(bgColor)
  const color = resolveColor(textColor)
  const border = resolveColor(borderColor)

  return (
    <PaperStyle $bg={bg} $color={color} $border={border} {...props}>{children}</PaperStyle>
  )
}

const shadows = {
  xs: shadowXs,
  sm: shadowSm,
  md: shadowMd,
  lg: shadowLg,
}

const PaperStyle = styled(Flex)(props => ({
  boxShadow: props.shadow ? shadows[props.shadow] : null,
  backgroundColor: props.$bg,
  color: props.$color,
  padding: props.gutter,
  border: '1px solid ' + props.$border,
}))

Paper.defaultProps = {
  borderColor: 'sub',
  shadow: 'md',
  gutter: '15px',
}

Paper.propTypes = {
  bgColor: PropTypes.string,
  gutter: PropTypes.string,
  borderColor: PropTypes.string,
  shadow: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  textColor: PropTypes.string,
}

export default Paper