import { useContext } from 'react'

import { ThemeContext } from './Theme'

function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme