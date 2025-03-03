import React from 'react'
import Table from '../Tables/Table'

const Temp = () => {
  return (
    <div className='w-full h-full rounded-lg flex flex-col justify-around items-center p-2 overflow-scroll scrollbar-hidden'>
        <div className=' rounded-lg w-full h-[90%] grid grid-cols-1 sm:grid-cols-5 gap-2 justify-between items-center'>
            
            {/* Form Section */}
            <div className='col-span-2 h-full rounded-lg bg-gray-100'>
                    <form className='w-full h-full p-5 flex flex-col justify-center items-center'>
                        <input  type="text" className='border rounded-lg p-2 m-2' placeholder='First Name'/>
                        <input type="text" className='border rounded-lg p-2 m-2' placeholder='Last Name'/>
                        <label htmlFor="doctortype"></label>
                        <div className='flex items-center'>
                            <h3>Doctor</h3>
                            <select id='doctortype' value='Doctor' className='border rounded-lg p-2 m-2'>
                                <option value="">Select</option>
                                <option value="">Select</option>
                                <option value="">Select</option>
                            </select>
                        </div>
                        <div className='my-2'>
                            <label htmlFor="from">From</label>
                            <input id='from' className='p-2 border rounded-lg ml-2' type="date" placeholder='From' />
                        </div>
                        <div className='my-2'>
                            <label htmlFor="from">From</label>
                            <input id='from' className='p-2 border rounded-lg ml-2' type="date" placeholder='From' />
                        </div>
                        <button className='p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white'>Show</button>
                    </form>
            </div>
        {/* Table Section */}
            <div className='col-span-3 h-full rounded-lg  bg-gray-100 overflow-scroll scrollbar-hidden'>
                <Table/>
            </div>
        </div>

        {/* Button's Section */}
        <div className='w-full flex flex-wrap items-center justify-end gap-3 h-[10%] rounded-lg'>
            <button className='p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white'>Update Apt. Time</button>
            <button className='p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white'>Update Apt. Status</button>
            <button className='p-3 mt-2 text-xs bg-red-600 rounded-lg text-white'>Cancel Appoinment</button>
            <button className='p-3 mt-2 text-xs bg-green-600 rounded-lg text-white'>Print List</button>
            <button className='p-3 mt-2 text-xs bg-red-800 rounded-lg text-white'>Close</button>
        </div>
    </div>
  )
}

export default Temp