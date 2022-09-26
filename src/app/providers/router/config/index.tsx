import { RouteProps } from 'react-router-dom';
import { AppRoutes } from 'shared/lib/router/AppRoutes';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
};
