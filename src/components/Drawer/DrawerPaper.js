import styled, { css } from 'styled-components'

import Paper from '~/components/Paper'

const translate3d = props => {
  switch (props.position) {
    case 'top': return css`0,-100%,0`;
    case 'bottom': return css`0,100%,0`;
    case 'right': return css`100%,0,0`;
    default: return '-100%,0,0';
  }
}

const DrawerPaper = styled(Paper).attrs(props => ({
  vertical: props.position === 'top' || props.position === 'bottom',
  onTop: props.position === 'top' || props.position === 'left',
  shadow: 'xl',
}))`
  text-align: left;
  position: fixed;
  overflow: auto;
  ${props => css`
    width: ${props.vertical ? '100%' : props.width};
    height: ${props.vertical ? props.width : '100%'};
    min-width: 310px;
    min-height: 310px;
    transform: translate3d(${translate3d});
    ${props.onTop ? 'top' : 'bottom'}: 0;
    ${props.position === 'right' ? 'right' : 'left' }: 0;
  `}
  z-index: 200;
  visibility: hidden;
  transition: all 350ms cubic-bezier(0.23, 1, 0.32, 1);

  &.open {
    transform: ${props => (props.vertical ? 'translateX(0)' : 'translateZ(0)')};
    visibility: visible;
  }
`

export default DrawerPaper
