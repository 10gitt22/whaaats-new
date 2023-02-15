import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const Main = memo(() => {
  const { t } = useTranslation()
  return <div className="page">{t('main')}</div>
})

export default Main
