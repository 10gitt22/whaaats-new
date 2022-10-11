import { createContext } from 'react'

export const enum Theme {
  PRIMARY = 'primary',
  DARK = 'dark',
}

interface ThemeContextType {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
