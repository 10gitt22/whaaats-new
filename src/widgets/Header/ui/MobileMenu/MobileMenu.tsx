import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BurgerMenu } from 'shared/ui/BurgerMenu/BurgerMenu'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import { Sidebar } from '../Sidebar/Sidebar'
import { UserMenu } from '../UserMenu/UserMenu'
import styles from './MobileMenu.module.scss'

type MobileMenuProps = {
  isAuth: boolean
  className?: string
  openAuthModal: () => void
}

export const MobileMenu: FC<MobileMenuProps> = ({ isAuth, className, openAuthModal }) => {
  const { t } = useTranslation()
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const handleChangePage = useCallback(() => {
    setSidebarOpened(false)
  }, [])
  return (
    <>
      <div className={styles.MobileMenu}>
        {isAuth
          ? (
            <>
              {/* eslint-disable i18next/no-literal-string */}
              <UserMenu userName='Yevhen Gitt' isMobile={true}/>
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
}
