import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Page404.module.scss'

type Page404Props = {
  className?: string
}

export const Page404: FC<Page404Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={classNames(styles.Page404, {}, [className, 'page'])}>
      <h3>{t('pageNotFound')}</h3>
    </div>
  )
}
