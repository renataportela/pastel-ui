import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors, BASE_COLORS_PROPS } from '~/components/Theme'
import Button, { GhostButton } from './AppBarButton'

function AppBar({ brand, children, left, right, onToggleMenu, ...props }) {
  return (
    <ColorBar {...props}>
      {onToggleMenu && (
        <MenuIconSlot>
          <GhostButton icon="menu" color={props.color} size="lg" round onClick={onToggleMenu} />
        </MenuIconSlot>
      )}
      {brand && <BrandSlot>{brand}</BrandSlot>}
      {left && <LeftSlot>{left}</LeftSlot>}
      {right && <RightSlot>{right}</RightSlot>}
    </ColorBar>
  )
}

const ColorBar = styled(BaseColors)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 3.8rem;
`

const Slot = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;  
  align-items: center;
  height: 100%;
  color: inherit;
`

const LeftSlot = styled(Slot)`  
  justify-content: flex-start;
`

const RightSlot = styled(Slot)`
  justify-content: flex-end;
  text-align: right;
  flex: 1;
`

const BrandSlot = styled(Slot)`
  padding: 0 2rem 0 0.8rem;
`

const MenuIconSlot = styled(Slot)`
  padding-left: 0.8rem;
`

AppBar.Button = Button

AppBar.defaultProps = {
  color: 'primary',
}

AppBar.propTypes = {
  ...BASE_COLORS_PROPS,
  brand: PropTypes.node.isRequired, 
  onToggleMenu: PropTypes.func,
}

export default AppBar
