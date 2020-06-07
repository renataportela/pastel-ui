import React from 'react'
import styled from '@emotion/styled'

import { Button } from '~/pastel-ui';

const Outer = styled.div`
  margin: 1.2rem auto 1.2rem;
  text-align: center;
  width: 100%;
`;

function FormButton(props){
  return (
    <Outer>
      <Button type="submit" loading={props.loading}>{props.label}</Button>
    </Outer>
  );
}

export default FormButton;