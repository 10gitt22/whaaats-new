import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { Header } from 'widgets/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from 'entities/User'

const App = () => {
  const dispatch = useDispatch()
  const intited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className='app'>
      <Suspense fallback="">
        <Header />
        {intited && <AppRouter />}
      </Suspense>
    </div>
  )
}

export default App
