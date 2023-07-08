import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const ArticleDetails = () => {
  const { t } = useTranslation()
  return <div className="page">
    {t('articles')}
  </div>
}

export default memo(ArticleDetails)
