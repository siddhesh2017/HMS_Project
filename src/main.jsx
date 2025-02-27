import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './assets/components/dashboard/MainContent.jsx'
import HomeContent from './assets/components/Homepage/HomeContent.jsx'
import LoginPage from './assets/components/Forms/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomeContent/>
      },
      {
        path: '/patient',
        element: <MainContent/>
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
