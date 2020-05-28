import styled, { css } from 'styled-components'

import { shadowBase, shadowLg, shadowOutline } from '~/styles/shadows'
import { roundShape, roundedBorders } from '~/styles/mixins'
import { fontSizes, padding } from '~/styles/params'
import { allEase } from '~/styles/transitions'

const roundSizes = {
  sm: '1.55rem',
  md: '2.075rem',
  lg: '2.4rem',
  xl: '3rem',
}

const buttonVariant = props => {
  let styles = {
    backgroundColor: props.chosenColor,
    color: props.textColor,
    borderColor: props.chosenColor,
    boxShadow: props.flat ? null : shadowBase,
    '&:hover:enabled': {
      boxShadow: props.flat ? null : shadowLg,
      backgroundColor: props.tintColor,
      borderColor: props.tintColor,
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
      borderColor: props.colors.disabled,
      backgroundColor: props.colors.disabled,
      color: props.colors.disabledTint,
    },
  };

  if (props.kind === 'outline') {
    const outlineColor = props.color === 'neutral' ? props.colors.neutralTint : props.chosenColor;

    styles = {
      ...styles, 
      backgroundColor: 'transparent',
      borderColor: outlineColor,
      boxShadow: 'none',
      '&:hover:enabled': {
        ...styles['&:hover:enabled'],
        backgroundColor: outlineColor,
        borderColor: outlineColor,
      },
    };

    styles['&:disabled'].backgroundColor = 'transparent'
  }

  return styles
}

const ButtonStyle = styled.button.attrs(props => ({
  chosenColor: props.colors[props.color] || props.color,
  textColor: props.colors[props.color + 'Contrast'] || props.colors.text,
  tintColor: props.colors[props.color + 'Tint'] || props.color,
  diameter: roundSizes[props.size],
  padding: padding[props.size].y+' '+padding[props.size].x,
}))`
  position: relative;
  cursor: pointer;
  outline: 0;
  whiteSpace: nowrap;
  userSelect: none;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0;
  text-transform: uppercase;
  border: 2px solid;

  & > svg {
    width: 1.1em;
    height: 1.1em;
    margin-right: ${props => props.hasLabel ? '.6em' : '0'};
  }

  ${props => css`
    font-size: ${fontSizes[props.size]};
    transition: ${allEase};
    ${props.round ? roundShape : [`padding: ${props.padding};`, roundedBorders]}
    ${buttonVariant}
  `}
`;  
  
export default ButtonStyle;