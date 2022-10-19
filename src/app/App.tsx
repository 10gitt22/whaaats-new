import './styles/index.scss'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { Header } from 'widgets/Header'

const App = () => {
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
