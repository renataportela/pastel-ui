import React from 'react'
import styled from 'styled-components'

import Button from '~/components/Button'

export const GhostButton = React.forwardRef((props, ref) => {
  return <Button kind="ghost" textColor="currentColor" flat ref={ref} {...props} />
});

const AppBarButton = styled(GhostButton)`  
  border-radius: 0;
  height: 100%;
`;


export default AppBarButton