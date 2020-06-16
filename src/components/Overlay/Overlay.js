import styled, { css } from 'styled-components'

import { fadeInFromNone } from '~/styles/transitions'

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  ${props => props.show 
    ? css`animation: ${fadeInFromNone} 150ms ease-in;`
    : css`visibility: hidden;`
  }
`;

Overlay.defaultProps = {
  show: true,
}

export default Overlay