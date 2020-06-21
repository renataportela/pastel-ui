import styled from 'styled-components'

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
  pointer-events: auto;
  opacity: 0;
  will-change: opacity;
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0,0,0.3,1);

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default Overlay