import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return <div className="page">{t('about')}</div>
}

export default About
