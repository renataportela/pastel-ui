import React from 'react'
import styled from 'styled-components'

function AppBarSlot(slot) {
  return function AppBarContent({ kind, children }) {
    const childrenWithKind = React.Children.map(children, element => {
      if (element.type.displayName !== 'AppBar.Menu') {
        return element;
      }
      return React.cloneElement(element, { kind, flat: true })
    })
  
    if (slot === 'left') {
      return <LeftSlot>{childrenWithKind}</LeftSlot>
    }
  
    return <RightSlot>{childrenWithKind}</RightSlot>
  }
}

const Slot = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  height: 100%;
`;

const LeftSlot = styled(Slot)`
  justify-content: flex-start;
`

const RightSlot = styled(Slot)`
  flex: 1;
  justify-content: flex-end;
  text-align: right;
`

AppBarSlot.displayName = 'AppBar.Slot'

export default AppBarSlot
