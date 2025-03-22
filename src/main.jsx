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
import NotCreatedYet from './components/Patients/NotCreatedYet.jsx'
import OpdBills from './components/Patients/OpdBills.jsx'
import OpPatientPayment from './components/Patients/OpPatientPayment.jsx'
import CompanySettlement from './components/Patients/CompanySettlement/CompanySettlement.jsx'
import ExpressRegisteration from './components/Patients/ExpressRegisteration/ExpressRegisteration.jsx'

const basename = process.env.NODE_ENV === 'production' ? '/' : '';

const router = createBrowserRouter([
  {
    path: `/`,
    element: <App/>,
    children: [
      {
        path: `/`,
        element: <HomeContent/>
      },
      {
        path: `/patient/`,
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
            path: 'registeration/express',
            element: <ExpressRegisteration/>
          },
          {
            path: 'registeration/regular',
            element: <NotCreatedYet/>
          },
          {
            path: 'queue-management',
            element: <NotCreatedYet/>
          },
          {
            path: 'medical-records',
            element: <MedicalRecords/>
          },
          {
            path: 'opd-bills',
            element: <OpdBills/>
          },
          {
            path: 'opd-settlement/op-patient-payment',
            element: <OpPatientPayment/>
          },
          {
            path: 'opd-settlement/company-settlement',
            element: <CompanySettlement/>
          },
          {
            path: 'bill-refund',
            element: <NotCreatedYet/>
          },
          {
            path: 'view-opd-bills-and-receipts/bill',
            element: <NotCreatedYet/>
          },
          {
            path: 'view-opd-bills-and-receipts/opd-receipt',
            element: <NotCreatedYet/>
          },
          {
            path: 'view-opd-bills-and-receipts/opd-refund',
            element: <NotCreatedYet/>
          },
          {
            path: 'view-opd-bills-and-receipts/prescriptions',
            element: <NotCreatedYet/>
          },
          {
            path: 'followup-list',
            element: <NotCreatedYet/>
          },
          {
            path: 'visitor-management/issue-visitor-pass',
            element: <NotCreatedYet/>
          },
          {
            path: 'visitor-management/collect-visitor-pass',
            element: <NotCreatedYet/>
          },
          {
            path: 'courier-management',
            element: <NotCreatedYet/>
          },
          {
            path: 'vaccination',
            element: <NotCreatedYet/>
          },
        ]
      }
    ]
  },
  {
    path: `/login`,
    element: <LoginPage/>
  },
],
{basename}

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
