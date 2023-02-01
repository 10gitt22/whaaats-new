import { RoutePath } from 'app/providers/router/config'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BurgerMenu } from 'shared/ui/BurgerMenu/BurgerMenu'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher'
import { NavLink } from 'shared/ui/NavLink/NavLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import styles from './MobileMenu.module.scss'

type MobileMenuProps = {
  className?: string
}

export const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
  const { t } = useTranslation()
  const [sidebarOpened, setSidebarOpened] = useState(false)

  const handleChangePage = () => {
    setSidebarOpened(false)
  }
  return (
    <>
      <BurgerMenu
        opened={sidebarOpened}
        setOpened={setSidebarOpened}
      />
      {sidebarOpened && (
        <div className={styles.MobileMenu}>
          <NavLink to={RoutePath.main} onClick={handleChangePage}>{t('main')}</NavLink>
          <NavLink to={RoutePath.about} onClick={handleChangePage}>{t('about')}</NavLink>
          <div className={styles.footer}>
            <LanguageSwitcher mobile={true}/>
            <ThemeSwitcher />
          </div>
        </div>
      )}

    </>
  )
}
