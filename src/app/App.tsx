import './styles/index.scss';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useTheme } from 'shared/hooks/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
