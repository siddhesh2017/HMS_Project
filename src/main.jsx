import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeContent from './components/Homepage/HomeContent.jsx'
import LoginPage from './components/Forms/LoginPage.jsx'
import Patients from './components/Patients/Patients.jsx'
import PhoneAppoinment from './components/Patients/PhoneAppoinment.jsx'
import PhoneAppList from './components/Patients/PhoneAppList.jsx'
import MedicalRecords from './components/Patients/MedicalRecords.jsx'

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
        path: `${basename}/patient/`,
        element: <Patients/>,
        children: [
          {
            path: 'appoinment',
            element: <PhoneAppoinment/>,
          },
          {
            path: 'appoinmentlist',
            element: <PhoneAppList/>
          },
          {
            path: 'queue-management',
            element: <PhoneAppList/>
          },
          {
            path: 'medical-records',
            element: <MedicalRecords/>
          },
          {
            path: 'opd-bills',
            element: <PhoneAppList/>
          },
          {
            path: 'opd-settlement',
            element: <PhoneAppList/>
          },
          {
            path: 'bill-refund',
            element: <PhoneAppList/>
          },
          {
            path: 'view-opd-bills-and-receipts',
            element: <PhoneAppList/>
          },
          {
            path: 'followup-list',
            element: <PhoneAppList/>
          },
          {
            path: 'visitor-management',
            element: <PhoneAppList/>
          },
          {
            path: 'courier-management',
            element: <PhoneAppList/>
          },
          {
            path: 'vaccination',
            element: <PhoneAppList/>
          },
        ]
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
