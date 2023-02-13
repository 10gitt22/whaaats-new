import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { Header } from 'widgets/Header'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className='app'>
      <Suspense fallback="">
        <Header />
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
