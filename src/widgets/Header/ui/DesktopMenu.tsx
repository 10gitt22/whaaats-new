import styles from './DesktopMenu.module.scss'

import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { NavLink } from 'shared/ui/NavLink/NavLink'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePath } from 'app/providers/router/config'

type DesktopMenuProps = {
  className?: string
}

export const DesktopMenu: FC<DesktopMenuProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.DesktopMenu, {}, [className])}>
      <div className={styles.nav}>
        <NavLink to={RoutePath.main}>{t('main')}</NavLink>
        <NavLink to={RoutePath.about}>{t('about')}</NavLink>
      </div>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  )
}
