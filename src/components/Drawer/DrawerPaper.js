import styled, { css } from 'styled-components'

import Paper from '~/components/Paper'
import { shadowXl } from '~/styles/shadows'

const translate3d = props => {
  switch (props.position) {
    case 'top': return css`0,-100%,0`;
    case 'bottom': return css`0,100%,0`;
    case 'right': return css`100%,0,0`;
    default: return '-100%,0,0';
  }
}

const DrawerPaper = styled(Paper).attrs(props => ({
  vertical: props.position === 'left' || props.position === 'right',
  $top: props.position === 'top' || props.position === 'left',
  shadow: null,
}))`
  text-align: left;
  position: fixed;
  overflow: auto;
  ${props => css`
    width: ${props.vertical ? props.width || '90%' : '100%'};
    height: ${props.vertical ? '100%' : props.height || '90%'};
    max-height: ${props.vertical ? '100%' : props.height || '400px'};
    max-width: ${props.vertical ? props.width || '400px' : '100%'};
    transform: translate3d(${translate3d});
    ${props.$top ? 'top' : 'bottom'}: 0;
    ${props.position === 'right' ? 'right' : 'left' }: 0;
  `}
  z-index: 200;
  will-change: transform;
  transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1);

  &.open {
    transform: none;
    box-shadow: ${shadowXl};
  }
`

export default DrawerPaper
