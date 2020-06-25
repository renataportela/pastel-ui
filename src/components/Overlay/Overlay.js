import styled from 'styled-components'

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 700;
  visibility: hidden;

  &.show {
    pointer-events: auto;
    visibility: visible;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    opacity: 0;
    will-change: opacity;
    pointer-events: none;
    transition: opacity .3s cubic-bezier(0,0,0.3,1), visibility 0.3s linear;
  }

  &.show:after {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default Overlay