import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import '@/index.css'
 
import AppRoutes from '@/shared/routes/index'
import { store } from '@/shared/store/redux/reduxStore'


const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>,
)
