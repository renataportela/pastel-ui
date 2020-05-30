import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, css } from 'styled-components'

import defaultTheme from '~/styles/theme'

export const ThemeContext = React.createContext()

function Theme({ children, theme }) {
  const appTheme = theme ? {...defaultTheme, ...theme} : defaultTheme;

  return (
    <ThemeContext.Provider value={{ ...appTheme }}>
      <GlobalStyle theme={appTheme} />
      {children}
    </ThemeContext.Provider>
  )
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    line-height: 1.5;
    ${({ theme }) => css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSize}px;
      color: ${theme.colors.text};
      background-color: ${theme.colors.bgColor};
    `}
  }

  [tabindex='-1']:focus:not(:focus-visible) {
    outline: 0 !important;
  }
`

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    colors: PropTypes.object,
  }),
}

export default Theme
