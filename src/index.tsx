import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ToastProvider } from 'app/providers/ToastProvider'
import App from 'app/App'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'

render(
  <BrowserRouter>
    <StoreProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <ToastProvider >
            <App />
          </ToastProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
