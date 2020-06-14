import styled, { css } from 'styled-components'

import { shadowSm, shadowLg, shadowOutline } from '~/styles/shadows'
import { roundShape, roundedBorders } from '~/styles/mixins'
import { FONT_SIZES, PADDING } from '~/styles/params'
import { allEase } from '~/styles/transitions'

const roundSizes = {
  sm: '1.55rem',
  md: '2.075rem',
  lg: '2.4rem',
  xl: '3rem',
}

const buttonVariant = props => {
  const chosenColor = props.colors[props.inverse ? props.kind + 'Inverse' : props.kind]
  
  let bgColor = props.colors.primary.bg
  let hoverColor = props.colors.primary.hover
  let textColor = props.colors.primary.text

  if (chosenColor){
    bgColor = chosenColor.bg;
    hoverColor = chosenColor.hover;
    textColor = chosenColor.text;
  }

  let styles = {
    backgroundColor: bgColor,
    color: textColor,
    border: props.kind === 'neutral' ? '1px solid '+chosenColor.border : '0',
    boxShadow: props.flat ? null : shadowSm,
    '&:hover:enabled': {
      boxShadow: props.flat ? null : shadowLg,
      backgroundColor: hoverColor,
      borderColor: hoverColor,
    },
    '&:focus': {
      boxShadow: shadowOutline,
    },
    '&:active': {
      boxShadow: 'none !important',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      boxShadow: 'none',
      borderColor: props.colors.disabled.bg,
      backgroundColor: props.colors.disabled.bg,
      color: props.colors.disabled.text,
    },
  };

  if (props.variant === 'outline' || props.variant === 'ghost') {
    styles['&:disabled'].backgroundColor = 'transparent'
    styles.backgroundColor = 'transparent'
    styles.boxShadow = 'none'
    styles.color = props.kind === 'neutral' ? textColor : bgColor;

    if (props.variant === 'outline') {
      const outlineColor = props.kind === 'neutral' ? hoverColor : bgColor;

      styles = {
        ...styles, 
        border: '2px solid',
        borderColor: outlineColor,        
        '&:hover:enabled': {
          ...styles['&:hover:enabled'],
          backgroundColor: outlineColor,
          borderColor: outlineColor,
          color: textColor,
        },
      };
    }
    else {
      styles = {
        ...styles,
        borderColor: 'transparent',
        '&:hover:enabled': {
          ...styles['&:hover:enabled'],
          backgroundColor: props.colors.transparentDark,
          borderColor: 'transparent',
          boxShadow: 'none'
        },
      };
      
      styles['&:disabled'].borderColor = 'transparent'
    }
  }

  return styles
}

const ButtonStyle = styled.button.attrs(props => {
  return {
    diameter: roundSizes[props.size],
    padding: PADDING[props.size].y+' '+PADDING[props.size].x,
  }
})`
  position: relative;
  cursor: pointer;
  outline: 0;
  whiteSpace: nowrap;
  userSelect: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;  

  & > svg {
    width: 1.1em;
    height: 1.1em;
    margin-right: ${props => props.hasLabel ? '.6em' : '0'};
  }

  ${props => css`
    font-size: ${FONT_SIZES[props.size]};
    transition: ${allEase};
    ${props.round ? roundShape : [`padding: ${props.padding};`, roundedBorders]}
    ${buttonVariant}
  `}
`;  
  
export default ButtonStyle;