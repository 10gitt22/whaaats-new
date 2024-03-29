import { FC, memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { User } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { BurgerMenu } from 'shared/ui/BurgerMenu/BurgerMenu'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'

import { Sidebar } from '../Sidebar/Sidebar'
import { UserMenu } from '../UserMenu/UserMenu'
import styles from './MobileMenu.module.scss'

type MobileMenuProps = {
  authData: User | undefined
  className?: string
  openAuthModal: () => void
}

export const MobileMenu: FC<MobileMenuProps> = memo(({ authData, className, openAuthModal }) => {
  const { t } = useTranslation()
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setSidebarOpened(false)
  }, [location])

  return (
    <>
      <div className={classNames(styles.MobileMenu, {}, [className])}>
        {authData
          ? (
            <>
              <UserMenu userName={authData.username} isMobile={true}/>
            </>
          )
          : <Button className={styles.loginButton} variant={ButtonVariants.PRIMARY} onClick={openAuthModal}>{t('signIn')}</Button>
        }
        <BurgerMenu
          opened={sidebarOpened}
          setOpened={setSidebarOpened}
        />

      </div>
      {sidebarOpened && <Sidebar/>}
    </>
  )
})
