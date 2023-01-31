import { FC, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from '../lib/ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.PRIMARY

const ThemeProvider: FC<{ propsTheme?: Theme }> = (props) => {
  const [theme, setTheme] = useState<Theme>(props.propsTheme ? props.propsTheme : defaultTheme)

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
