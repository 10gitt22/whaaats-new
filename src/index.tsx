import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { AppLayout } from 'app/layouts/AppLayout/AppLayout'
import App from 'app/App'

import 'shared/config/i18n/i18n'
render(
  <BrowserRouter>
    <ThemeProvider>
      <AppLayout>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AppLayout>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
