import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './assets/components/dashboard/MainContent.jsx'
import HomeContent from './assets/components/Homepage/HomeContent.jsx'
import LoginPage from './assets/components/Forms/LoginPage.jsx'
import Temp from './assets/components/dashboard/Temp.jsx'

const basename = process.env.NODE_ENV === 'production' ? '/healthcare.beatsacademy.in' : '';

const router = createBrowserRouter([
  {
    path: `${basename}/`,
    element: <App/>,
    children: [
      {
        path: `${basename}/`,
        element: <HomeContent/>
      },
      {
        path: `${basename}/patient`,
        element: <Temp/>
      }
    ]
  },
  {
    path: `${basename}/login`,
    element: <LoginPage/>
  }
],

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
