import './styles/index.scss';

import { useTheme } from 'shared/hooks/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

// const Component = () => {
//   const { t, i18n } = useTranslation();

//   const toggle = () => {
//     i18n.changeLanguage(i18n.language === 'uk-UA' ? 'en' : 'uk-UA');
//   };

//   return (
//     <div>
//       <button onClick={toggle}>{t('translate')}</button>
//     </div>
//   );
// };

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <AppRouter />
        {/* <Component /> */}
      </Suspense>
    </div>
  );
};

export default App;
