import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

import { scale } from '~/pastel-ui/theming';
import { Overlay, Paper } from '~/pastel-ui';
import Button from '~/pastel-ui/components/Button';
import useOutsideCloser from '~/pastel-ui/hooks/useOutsideCloser';

const modalRoot = document.getElementById('modal-root');

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300;

  & > div {
    min-width: 300px;
    max-width: 90%;
    animation: ${scale} .1s;

    @media (min-width: 778px) {
      min-width: 600px;
    }
  }
`;

const CloseContainer = styled.div`
  float: right;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

function Modal(props){
  const [el] = useState(document.createElement('div'));
  const modalBoxRef = useRef();
  const close = () => props.setOpen(false);

  useOutsideCloser(modalBoxRef, close);

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  }, []);  

  if (props.open){
    return ReactDOM.createPortal(
        <Overlay>
          <Centered>
            <Paper ref={modalBoxRef}>
              <CloseContainer>
                <CloseButton 
                  pallete="primary" 
                  variant="outline" 
                  title={props.titleClose || 'Close'}
                  icon="close"
                  round
                  onClick={close}
                />
              </CloseContainer>
              {props.children}
            </Paper>
          </Centered>
        </Overlay>,
      el
    );
  }

  return null;
}

export default Modal;