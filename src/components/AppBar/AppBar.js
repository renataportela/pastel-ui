import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors } from '~/components/Theme'
import { Button } from '~/components'
import Menu from './AppBarMenu'

function AppBar({ brand, children, kind, left, right, onToggleMenu, ...props }) {
  return (
    <ColorBar pallete={kind} {...props}>
      {onToggleMenu && (
        <MenuIconSlot>
          <Button icon="menu" kind={kind} textColor="currentColor" size="lg" round flat onClick={onToggleMenu} />
        </MenuIconSlot>
      )}
      {brand && <BrandSlot>{brand}</BrandSlot>}
      {left && <LeftSlot>{left}</LeftSlot>}
      {right && <RightSlot>{right}</RightSlot>}
    </ColorBar>
  )
}

const ColorBar = styled(BaseColors)`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  height: 3.8rem;
`

const Slot = styled.div`
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

AppBar.Menu = Menu

AppBar.defaultProps = {
  kind: 'primary',
}

AppBar.propTypes = {
  brand: PropTypes.node.isRequired, 
  kind: PropTypes.string, 
  onToggleMenu: PropTypes.func,
}

export default AppBar
