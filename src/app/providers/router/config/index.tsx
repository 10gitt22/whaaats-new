import { RouteProps } from 'react-router-dom'
import { AppRoutes } from 'shared/lib/router/AppRoutes'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Page404 } from 'pages/Page404'

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <Page404 />
  }
}
