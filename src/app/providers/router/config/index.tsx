import { RouteProps } from 'react-router-dom'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { ProfilePage } from 'pages/ProfilePage'
import { Page404 } from 'pages/Page404'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticlesPage } from 'pages/ArticlesPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found'
}


export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id

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
    element: <ProfilePage />
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <Page404 />
  }
}
