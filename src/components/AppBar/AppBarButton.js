import React from 'react'
import styled from 'styled-components'

import Button from '~/components/Button'

export const GhostButton = props => {
  return <Button kind="ghost" textColor="currentColor" flat {...props} />
}

const AppBarButton = styled(GhostButton)`  
  border-radius: 0;
  height: 100%;
`;

export default AppBarButton