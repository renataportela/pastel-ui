import React from 'react';
import styled from '@emotion/styled';

const Outer = styled.div`
  width: 100%;
  position: relative;
  height: 24px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  user-select: none;
  outline: none;
  color: #2196f3;
`;

const Track = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -1px;
  height: 2px;
  background-color: #bdbdbd;
  width: 100%;
`;

const Fill = styled(Track)`
  background-color: ${props => props.disabled ? '#ccc' : 'currentColor'};
`;

const Thumb = styled.div`
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background-color: currentColor;
  color: currentColor;
  border-radius: 50%;
  transform: translate(-50%,-50%);
  transition: background .45s cubic-bezier(.23,1,.32,1),border-color .45s cubic-bezier(.23,1,.32,1),width .45s cubic-bezier(.23,1,.32,1),height .45s cubic-bezier(.23,1,.32,1);
  cursor: pointer;
`;

function Slider(props){
  const percent = 25 + '%';

  return (
    <Outer tabindex="0">
      <input type="hidden" value={props.value} />
      {/* <div class="mu-slider-display-value " style="left: 9.5%;">
        <span class="display-value-text">9.5</span>
      </div> */}
      <Track />
      <Fill percent={percent} style={{ width: percent }} />
      <Thumb percent={percent} style={{ left: percent }} />
    </Outer>
  );
}

export default Slider;