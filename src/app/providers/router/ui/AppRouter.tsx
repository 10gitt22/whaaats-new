import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { AppRoutesProps, routeConfig } from '../config'
import { RequireAuth } from './RequireAuth'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = route.authOnly && route.element ? <RequireAuth>{route.element}</RequireAuth> : route.element
    return (<Route key={route.path} path={route.path} element={element}/>)
  }, [])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
