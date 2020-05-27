import React from 'react'
import styled from 'styled-components'

import useTheme from './useTheme'

const BaseStyle = styled.div(({ bgColor, textColor }) => {
  return {
    backgroundColor: bgColor || null,
    color: textColor || 'currentColor',
  }
})

function BaseColors({ bgColor, kind, textColor, ...props }) {
  const { colors } = useTheme()
  const bg = colors[bgColor] || bgColor || kind;
  let color = textColor

  if (color && colors[color]){
    color = colors[color];
  }
  else if (!color) {
    color = colors[(bgColor || kind) + 'Contrast'];
  } 

  return (
    <BaseStyle textColor={color} bgColor={bg} {...props} />
  )
}

export default BaseColors