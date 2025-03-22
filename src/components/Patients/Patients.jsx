import React from 'react'
import { Outlet } from 'react-router-dom'

const Patients = () => {
   
  return (
    <div className='w-full h-full '>
        <Outlet/>
    </div>
  )
}

export default Patients