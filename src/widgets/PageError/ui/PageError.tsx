import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import styles from './PageError.module.scss'

type PageErrorProps = {
  className?: string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      {t('somethingWentWrong')}
      {/* <button>asdasd</button> */}
      <Button onClick={reloadPage}>{t('reloadPage')}</Button>
    </div>
  )
}
