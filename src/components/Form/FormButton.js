import React from 'react'
import styled from 'styled-components'

import { Button } from '~/components'

function FormButton(props) {
  return (
    <Outer>
      <Button type="submit" {...props} />
    </Outer>
  );
}

const Outer = styled.div`
  margin: 1.2rem auto 1.2rem;
  text-align: center;
  width: 100%;
`

FormButton.displayName = 'Form.Button'

export default FormButton