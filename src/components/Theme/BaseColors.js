import React from 'react'
import styled from 'styled-components'

import useTheme from './useTheme'

const BaseStyle = styled.div(({ bgColor, textColor }) => {
  return {
    backgroundColor: bgColor,
    color: textColor,
  }
})

function BaseColors({ bgColor, pallete, textColor, ...props }) {
  const { colors } = useTheme()
  const palleteColor = pallete && colors[pallete] ? colors[pallete] : { text: 'currentColor', bg: null };

  const color = colors[textColor] ? colors[textColor].bg : textColor;
  const bg = colors[bgColor] ? colors[bgColor].bg : bgColor;
  
  return (
    <BaseStyle 
      textColor={color || palleteColor.text} 
      bgColor={bg || palleteColor.bg} 
      {...props} 
    />
  )
}

export default BaseColors