import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  return <div className="page">{t('main')}</div>;
};

export default Main;
