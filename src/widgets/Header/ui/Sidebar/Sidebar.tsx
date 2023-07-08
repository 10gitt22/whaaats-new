import { RoutePath } from 'app/providers/router/config'
import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'shared/lib/hooks/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { NavLink } from 'shared/ui/NavLink/NavLink'
import { Portal } from 'shared/ui/Portal/Portal'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import styles from './Sidebar.module.scss'

type SidebarProps = {
  className?: string
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <Portal>
      <div className={classNames(styles.Sidebar, {}, [`app_theme_${theme}`, className])}>
        <NavLink to={RoutePath.main}>{t('main')}</NavLink>
        <NavLink to={RoutePath.about}>{t('about')}</NavLink>
        <NavLink to={RoutePath.articles}>{t('articles')}</NavLink>
        <div className={styles.footer}>
          <LanguageSwitcher mobile={true}/>
          <ThemeSwitcher />
        </div>
      </div>
    </Portal>
  )
})
