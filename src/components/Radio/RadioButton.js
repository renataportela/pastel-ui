import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { inputStyles } from '~/pastel-ui/components/Input';
import { colors } from '~/pastel-ui/theming';

const RadioButtonStyle = styled.div`
  ${css`${inputStyles}`}
  padding: .6rem .8rem;

  &.selected {
    background-color: ${colors.secondary_300} !important;
    color: ${colors.primary_600};
  }

  &:hover:enabled,
  &:hover:not(.disabled) {
    cursor: pointer;
  }

  ${({ hasError }) => `
    border-color: ${hasError ? colors.error + ' !important' : colors.grey_300};
  `}
`;

const HiddenInputContainer = styled.div`
  border: 0;
  padding: 0;
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
`;

function RadioButton({ children, name, value, onChange, ...props}){
  const [isFocused, setIsFocused] = useState(false);
  const inputEl = useRef(null);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  let classNames = ''+props.checked === ''+value ? 'selected ' : '';
  classNames += isFocused ? 'focused' : '';

  const onClick = () => {
    if (!props.disabled && onChange) {
      inputEl.current.checked = props.checked;
      inputEl.current.focus();
      onChange({ target: { name, value }});
    }
  };

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.checked = props.checked;
    }
  }, []);

  return (
    <RadioButtonStyle onClick={onClick} className={classNames} {...props}>
      <HiddenInputContainer>
        <input
          name={name}
          ref={inputEl}
          type="radio"
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </HiddenInputContainer>
      {children}
    </RadioButtonStyle>
  );
}

export default RadioButton;