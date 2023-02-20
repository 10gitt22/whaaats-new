import styles from './DesktopMenu.module.scss'

import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { NavLink } from 'shared/ui/NavLink/NavLink'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import { RoutePath } from 'app/providers/router/config'
import { UserMenu } from '../UserMenu/UserMenu'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import { User } from 'entities/User'

type DesktopMenuProps = {
  authData: User | undefined
  className?: string
  openAuthModal: () => void
}

export const DesktopMenu: FC<DesktopMenuProps> = memo(({ authData, className, openAuthModal }) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.DesktopMenu, {}, [className])}>
      <div className={styles.nav}>
        <NavLink to={RoutePath.main}>{t('main')}</NavLink>
        <NavLink to={RoutePath.about}>{t('about')}</NavLink>
      </div>
      <ThemeSwitcher />
      <LanguageSwitcher />
      {authData
        ? (
          <>
            <UserMenu userName={authData.username} isMobile={false}/>
          </>
        )
        : <Button variant={ButtonVariants.PRIMARY} onClick={openAuthModal}>{t('signIn')}</Button>}
    </div>
  )
})
