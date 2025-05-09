import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Login from './views/Login.jsx'
import Signup from './views/Signup.jsx'
import Users from './views/Users.jsx'



const router = createBrowserRouter([
  {
    path: '*',
    element: <Login />
  } , 
  {
    path: '/login',
    element: <Login />
  } , 
  {
    path : '/signup',
    element: <Signup />
  },
   {
    path : '/users',
    element: <Users />
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
