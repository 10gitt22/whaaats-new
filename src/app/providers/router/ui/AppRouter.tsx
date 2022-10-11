import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config'

const AppRouter = () => {
  const { t } = useTranslation()

  return (
    <Suspense fallback={<div className='page'>{t('loading')}</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
