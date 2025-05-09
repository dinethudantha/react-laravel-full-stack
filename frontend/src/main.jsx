import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import NotFound from './NotFound.jsx'

const router = createBrowserRouter([
  {
    path:'*',
    element: <NotFound />
  },
  {
    path:'/',
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
