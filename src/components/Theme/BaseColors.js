import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PALLETE } from '~/constants'
import useTheme from './useTheme'

function BaseColors({ bgColor, color, textColor, ...props }) {
  const { colors } = useTheme()
  const palleteColor = getColor(colors, color) || { text: 'currentColor', bg: null };
  const fontColor = getColor(colors, textColor, 'text') || textColor;
  const bg = getColor(colors, bgColor, 'bg') || bgColor;
  
  return (
    <BaseStyle 
      $textColor={fontColor || palleteColor.text} 
      $bgColor={bg || palleteColor.bg} 
      {...props} 
    />
  )
}

const getColor = (colors, chosen, attr) => {
  if (!chosen) return null
  const color = colors[chosen];
  return color && attr ? color[attr] : color;
}

const BaseStyle = styled.div(({ $bgColor, $textColor }) => {
  return {
    backgroundColor: $bgColor,
    color: $textColor,
  }
})

export const BASE_COLORS_PROPS = {
  bgColor: PropTypes.string,
  color: PropTypes.oneOf(PALLETE),
  textColor: PropTypes.string,
}

BaseColors.propTypes = BASE_COLORS_PROPS

export default BaseColors