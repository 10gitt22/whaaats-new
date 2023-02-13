import { User } from 'entities/User'
import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { BurgerMenu } from 'shared/ui/BurgerMenu/BurgerMenu'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import { Sidebar } from '../Sidebar/Sidebar'
import { UserMenu } from '../UserMenu/UserMenu'
import styles from './MobileMenu.module.scss'

type MobileMenuProps = {
  authData: User
  className?: string
  openAuthModal: () => void
}

export const MobileMenu: FC<MobileMenuProps> = memo(({ authData, className, openAuthModal }) => {
  const { t } = useTranslation()
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const handleChangePage = useCallback(() => {
    setSidebarOpened(false)
  }, [setSidebarOpened])

  return (
    <>
      <div className={classNames(styles.MobileMenu, {}, [className])}>
        {authData
          ? (
            <>
              <UserMenu userName={authData.username} isMobile={true}/>
            </>
          )
          : <Button variant={ButtonVariants.PRIMARY} onClick={openAuthModal}>{t('signIn')}</Button>
        }
        <BurgerMenu
          opened={sidebarOpened}
          setOpened={setSidebarOpened}
        />

      </div>
      {sidebarOpened && <Sidebar handleChangePage={handleChangePage}/>}
    </>
  )
})
