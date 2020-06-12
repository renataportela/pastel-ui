import React from 'react'

import { Menu } from '~/components'
import Button from './AppBarButton'

function AppBarMenu({ children, ...props }) {
  const appButton = <Button variant="ghost" style={{ color: 'currentColor' }} flat {...props} />

  if (React.Children.count(children) === 0) {
    return appButton
  }

  return <Menu activator={appButton}>{children}</Menu>
}

AppBarMenu.displayName = 'AppBar.Menu'

export default AppBarMenu
