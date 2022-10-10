import './styles/index.scss';

import { useTheme } from 'shared/hooks/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
