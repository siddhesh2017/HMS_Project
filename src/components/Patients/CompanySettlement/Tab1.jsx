import React from 'react'
import MedicalRecTable from '../../Tables/MedicalRecTable'

const Tab1 = () => {
  return (
    <div className='w-full h-[90%] flex lg:flex-row flex-col mt-2  gap-6 mb-20'>
        <div className='h-full py-4 px-8 rounded-lg bg-gray-100'>
            <form>

                <label htmlFor="date">Date</label>
                <div id='date' className='p-5 ml-2 mt-2 border border-gray-300 rounded-lg w-full flex gap-5'>
                    <div className="my-2 w-full">
                        <label htmlFor="from">From</label>
                        <input id="from" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="date" />
                    </div>
                    <div className="my-2 w-full">
                        <label htmlFor="time">Time</label>
                        <input id="time" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="time" />
                    </div>
                </div>

                <div className="flex flex-col items-stretch justify-center w-full mb-4 mt-5">
                    <label htmlFor="doctortype">Company Name</label>
                    <div id="doctortype">
                        <select className="w-full h-9 sm:h-auto border border-gray-300 rounded-lg p-2 m-2">
                        <option value="">ABC</option>
                        <option value="">XYZ</option>
                        <option value="">IJK</option>
                        </select>
                    </div>
                </div>

                <label htmlFor="date">Date</label>
                <div id='date' className='p-5 ml-2 mb-5 mt-2 border border-gray-300 rounded-lg w-full '>
                    <div className="my-2 w-full">
                        <label htmlFor="from">From</label>
                        <input id="from" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="date" />
                    </div>
                    <div className="my-2 w-full">
                        <label htmlFor="time">To</label>
                        <input id="time" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="date" />
                    </div>
                </div>

                <label htmlFor="patientname">Patient Name</label>
                <div id="patientname">
                    <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="First Name" />
                </div>

                <label htmlFor="patientname">UHID</label>
                <div id="patientname" className='mt-2'>
                    <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="First Name" />
                </div>

                <label htmlFor="patientname">OP/ IP No.</label>
                <div id="patientname" className='mt-2'>
                    <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="First Name" />
                </div>

                <button className="p-3 mt-5 text-xs bg-blue-600 rounded-lg text-white">Show</button>

            </form>
        </div>
        <div className='flex flex-col overflow-scroll'>
            <div className='bg-gray-100 h-full rounded-lg mt-3 lg:mt-0'>
                <MedicalRecTable/>
            </div>
            <div className="w-full mt-30 flex flex-wrap items-center justify-end gap-3 h-[10%] rounded-lg">
                <button className="p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white">Print</button>
                <button className="p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white">Save</button>
                <button className="p-3 mt-2 text-xs bg-red-600 rounded-lg text-white">Close</button>
            </div>
        </div>
    </div>
  )
}

export default Tab1