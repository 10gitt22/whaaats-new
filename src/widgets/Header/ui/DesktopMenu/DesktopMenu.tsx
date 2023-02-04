import styles from './DesktopMenu.module.scss'

import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { NavLink } from 'shared/ui/NavLink/NavLink'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePath } from 'app/providers/router/config'
import { UserMenu } from '../UserMenu/UserMenu'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'

type DesktopMenuProps = {
  isAuth: boolean
  className?: string
  openAuthModal: () => void
}

export const DesktopMenu: FC<DesktopMenuProps> = ({ isAuth, className, openAuthModal }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.DesktopMenu, {}, [className])}>
      <div className={styles.nav}>
        <NavLink to={RoutePath.main}>{t('main')}</NavLink>
        <NavLink to={RoutePath.about}>{t('about')}</NavLink>
      </div>
      <ThemeSwitcher />
      <LanguageSwitcher />
      {isAuth
        ? (
          <>
            {/* eslint-disable i18next/no-literal-string */}
            <UserMenu userName='Yevhen Gitt' isMobile={false}/>
          </>
        )
        : <Button variant={ButtonVariants.PRIMARY} onClick={openAuthModal}>{t('signIn')}</Button>}
    </div>
  )
}
