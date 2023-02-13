import { RoutePath } from 'app/providers/router/config'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'shared/hooks/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { NavLink } from 'shared/ui/NavLink/NavLink'
import { Portal } from 'shared/ui/Portal/Portal'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import styles from './Sidebar.module.scss'

type SidebarProps = {
  className?: string
  handleChangePage: () => void

}

export const Sidebar: FC<SidebarProps> = ({ className, handleChangePage }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const onClose = () => {
    handleChangePage()
  }

  return (
    <Portal>
      <div className={classNames(styles.Sidebar, {}, [`app_theme_${theme}`, className])}>
        <NavLink to={RoutePath.main} onClick={onClose}>{t('main')}</NavLink>
        <NavLink to={RoutePath.about} onClick={onClose}>{t('about')}</NavLink>
        <div className={styles.footer}>
          <LanguageSwitcher mobile={true}/>
          <ThemeSwitcher />
        </div>
      </div>
    </Portal>
  )
}
