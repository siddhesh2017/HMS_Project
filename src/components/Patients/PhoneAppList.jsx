import React from 'react';
import Table from '../Tables/Table';

const Temp = () => {
  return (
    <div className="w-full h-full  rounded-lg flex flex-col flex-wrap justify-around items-center p-2 overflow-scroll scrollbar-hidden">
      {/* Form and Table Section */}
      <div className="rounded-lg w-full h-[90%] flex flex-wrap justify-center items-stretch lg:grid lg:grid-cols-5 gap-2 overflow-scroll scrollbar-hidden ">
        
        {/* Form Section */}
        <div className="lg:col-span-2 h-auto rounded-lg bg-gray-100 p-5 ">
            <h1 className=' text-2xl sm:text-3xl font-bold '>Phone Appoinment List</h1>
          <form className="w-full h-full p-5 flex flex-col lg:justify-baseline items-start">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="patientname">Patient Name</label>
              <div id="patientname">
                <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="First Name" />
                <input type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" placeholder="Last Name" />
              </div>
            </div>
            <label htmlFor="doctortype"></label>
            <div className="flex items-center w-full mb-4 mt-5">
              <h3>Doctor</h3>
              <select id="doctortype" className="w-full h-9 sm:h-auto border border-gray-300 rounded-lg p-2 m-2">
                <option value="">Dr.ABC</option>
                <option value="">Dr.XYZ</option>
                <option value="">Dr.Select</option>
              </select>
            </div>
            <div className="my-2 w-full">
              <label htmlFor="from">From</label>
              <input id="from" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="date" />
            </div>
            <div className="my-2 w-full">
              <label htmlFor="to">To</label>
              <input id="to" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" type="date" />
            </div>
            <button className="p-3 mt-5 text-xs bg-blue-600 rounded-lg text-white">Show</button>
          </form>
        </div>

        {/* Table Section */}
        <div className="lg:col-span-3 h-full rounded-lg bg-gray-100 overflow-scroll scrollbar-hidden">
          <Table />
        </div>
        
      </div>

      {/* Buttons Section */}
      <div className="w-full flex flex-wrap items-center justify-end gap-3 h-[10%] rounded-lg">
        <button className="p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white">Update Apt. Time</button>
        <button className="p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white">Update Apt. Status</button>
        <button className="p-3 mt-2 text-xs bg-red-600 rounded-lg text-white">Cancel Appointment</button>
        <button className="p-3 mt-2 text-xs bg-green-600 rounded-lg text-white">Print List</button>
        <button className="p-3 mt-2 text-xs bg-red-800 rounded-lg text-white">Close</button>
      </div>
    </div>
  );
};

export default Temp;
