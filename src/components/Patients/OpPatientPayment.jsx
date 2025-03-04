import React from 'react'
import MedicalRecTable from '../Tables/MedicalRecTable'


const OpPatientPayment = () => {
  return (
    <div className="w-full h-full  rounded-lg flex flex-col flex-wrap justify-around items-center p-2 overflow-scroll scrollbar-hidden">
      {/* Form and Table Section */}
      <div className="rounded-lg w-full h-[90%] flex flex-wrap justify-center items-stretch lg:grid lg:grid-cols-5 gap-2 overflow-scroll scrollbar-hidden ">
        
        {/* Form Section */}
        <div className="lg:col-span-2 h-auto rounded-lg bg-gray-100 p-5 ">
            <h1 className=' text-2xl sm:text-3xl font-bold '>OP Patient Payment</h1>
          <form className="w-full h-full p-5 flex flex-col lg:justify-baseline items-start">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="patientname">Patient Name</label>
              <div id="patientname">
                <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="First Name" />
                <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="Last Name" />
              </div>

              <div className='flex items-center justify-center w-full gap-4 mt-4'>
                <div className='flex flex-col items-start w-full'>
                  <label htmlFor="patientmobileno">Mobile No.</label>
                  <div id="patientmobileno">
                    <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="Enter mobile no." />
                  </div>
                </div>

                <div className='flex flex-col items-start w-full'>
                  <label htmlFor="uhid">UHID</label>
                  <div id="uhid">
                    <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="Enter UHID" />
                  </div>
                </div>
              </div>

            </div>
            
            <div className="flex flex-col items-stretch justify-center w-full mb-4 mt-5">
              <label htmlFor="doctortype">Doctor</label>
              <div id="doctortype">
                <select className="w-full h-9 sm:h-auto border border-gray-300 rounded-lg p-2 m-2">
                  <option value="">Dr.ABC</option>
                  <option value="">Dr.XYZ</option>
                  <option value="">Dr.Select</option>
                </select>
              </div>
            </div>

            <label htmlFor="date-from-to">Date</label>
            <div id='date-from-to' className='p-5 ml-2 mt-2 border border-gray-300 rounded-lg w-full'>
              <div className="my-2 w-full">
                <label htmlFor="from">From</label>
                <input id="from" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="date" />
              </div>
              <div className="my-2 w-full">
                <label htmlFor="to">To</label>
                <input id="to" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="date" />
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-center w-full mb-4 mt-5">
              <label htmlFor="doctortype">Patient Type</label>
              <div id="doctortype">
                <select className="w-full h-9 sm:h-auto border border-gray-300 rounded-lg p-2 m-2">
                  <option value="">ABC</option>
                  <option value="">XYZ</option>
                  <option value="">IJK</option>
                </select>
              </div>
            </div>

            <label htmlFor="advanced-search-option"> Advanced Search Option</label>
            <textarea className='w-full bg-gray-200 p-2 h-10 rounded-lg mt-2 ml-2' name="Advanced Search Option" id="advanced-search-option"></textarea>

            <button className="p-3 mt-5 text-xs bg-blue-600 rounded-lg text-white">Show</button>
          </form>
        </div>

        {/* Table Section */}
        <div className="lg:col-span-3 h-full rounded-lg bg-gray-100 overflow-scroll scrollbar-hidden">
          <MedicalRecTable />
        </div>
        
      </div>

      {/* Buttons Section */}
      <div className="w-full flex flex-wrap items-center justify-end gap-3 h-[10%] rounded-lg">
        <button className="p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white">Payment</button>
        <button className="p-3 mt-2 text-xs bg-red-600 rounded-lg text-white">Close</button>
      </div>
    </div>
  )
}

export default OpPatientPayment