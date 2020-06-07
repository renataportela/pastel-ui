import React from 'react';
import styled from '@emotion/styled';

import { RadioButton } from '~/pastel-ui';

const Outer = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  & > div:not(:last-child) {
    border-right-color: transparent;
  }

  & > div:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & > div:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

function RadioButtons({ children, error, name, options = [], textKey, value, valueKey, onChange, ...props}){
  return (
    <Outer {...props}>      
      {options.length > 0 && options.map(option => (
        <RadioButton 
          name={name}
          key={option[valueKey]} 
          value={option[valueKey]} 
          checked={value}
          hasError={!!error}
          onChange={onChange}
        >
          {option[textKey]}
        </RadioButton>
      ))}
      {children}   
    </Outer>
  );
}

RadioButtons.defaultProps = {
  textKey: 'description',
  valueKey: 'id',
};

export default RadioButtons;