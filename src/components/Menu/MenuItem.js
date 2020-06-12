import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { shadowOutline } from '~/styles/shadows'
import { BaseColors } from '~/components/Theme'

function MenuItem({ children, close, onClick, ...props }) {
  const handleClick = () => {    
    close();
    onClick();
  };

  return (
    <MenuItemStyle onClick={handleClick} {...props}>{children}</MenuItemStyle>
  )
}

const MenuItemStyle = styled(BaseColors).attrs(() => ({
  forwardedAs: 'button',
}))`
  border: 0;
  display: flex;
  padding: .8rem 1.2rem;
  text-transform: uppercase;
  align-items: center;
  cursor: pointer;
  outline: 0;
  background-color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:focus {
    box-shadow: inset ${shadowOutline};
  }
`

MenuItem.defaultProps = {
  textColor: 'currentColor',
}

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  textColor: PropTypes.string,
}

export default MenuItem;