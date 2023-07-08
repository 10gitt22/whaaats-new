import { RouteProps } from 'react-router-dom'
import { AppRoutes } from 'shared/lib/router/AppRoutes'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { ProfilePage } from 'pages/ProfilePage'
import { Page404 } from 'pages/Page404'

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

  // DEFAULT
  [AppRoutes.NOT_FOUND]: '*'
}

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <Page404 />
  }
}
