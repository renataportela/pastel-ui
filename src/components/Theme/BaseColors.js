import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PALLETES } from '~/styles/params'
import useTheme from './useTheme'

const BaseStyle = styled.div(({ bgColor, textColor }) => {
  return {
    backgroundColor: bgColor,
    color: textColor,
  }
})

function BaseColors({ bgColor, tint, pallete, textColor, ...props }) {
  const { colors } = useTheme()
  const getColor = (chosen, attr) => {
    if (!chosen) return null
    const color = tint ? colors[chosen+'_'+tint] : colors[chosen];
    return color && attr ? color[attr] : color;
  }
  const palleteColor = getColor(pallete) || { text: 'currentColor', bg: null };
  const color = getColor(textColor, 'text') || textColor;
  const bg = getColor(bgColor, 'bg') || bgColor;
  
  return (
    <BaseStyle 
      textColor={color || palleteColor.text} 
      bgColor={bg || palleteColor.bg} 
      {...props} 
    />
  )
}

BaseColors.propTypes = {
  bgColor: PropTypes.string,
  alternative: PropTypes.bool,
  pallete: PropTypes.oneOf(PALLETES),
  textColor: PropTypes.string,
}

export default BaseColors