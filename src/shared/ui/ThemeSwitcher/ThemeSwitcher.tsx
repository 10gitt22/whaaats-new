import styles from './ThemeSwitcher.module.scss'

import { FC, memo } from 'react'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/sun.svg'
import DarkIcon from 'shared/assets/icons/night.svg'

type ThemeSwitcherProps = {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      className={classNames(styles.ThemeSwitcher, {}, [
        className,
        styles[theme]
      ])}
      onClick={toggleTheme}
    >
      <div className={classNames(styles.switch, {}, [])}>
        {theme === 'primary'
          ? (
            <LightIcon className={styles.icon} />
          )
          : (
            <DarkIcon className={styles.icon} />
          )}
      </div>
    </button>
  )
})
