import './styles/index.scss';

import { useTheme } from 'shared/hooks/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
