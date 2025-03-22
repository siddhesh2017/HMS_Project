import React, { useEffect } from 'react'
import MedicalRecTable from '../Tables/MedicalRecTable'
import { useState } from 'react'
import axios from 'axios';

const MedicalRecords = () => {
  const [tableData, setTableData] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile_number: '',
    uhid: '',
    doctor: '',
    from_date: '',
    to_date: '',
    patient_type: '',
    advanced_search_option: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/medical_records/medical-records/')
    .then((response) => {setTableData(response.data)})
    .catch((error) => {console.log(error)})
  }, [])

  return (
    <div className="w-full h-full  rounded-lg flex flex-col flex-wrap justify-around items-center p-2 overflow-scroll scrollbar-hidden">
      {/* Form and Table Section */}
      <div className="rounded-lg w-full h-[90%] flex flex-wrap justify-center items-stretch lg:grid lg:grid-cols-5 gap-2 overflow-scroll scrollbar-hidden ">
        
        {/* Form Section */}
        <div className="lg:col-span-2 h-auto rounded-lg bg-gray-100 p-5 ">
            <h1 className=' text-2xl sm:text-3xl font-bold '>Medical Records</h1>
  
          <form onSubmit={handleSubmit} className="w-full h-full p-5 flex flex-col lg:justify-baseline items-start">
            <div className="flex flex-col items-start w-full">
              <label htmlFor="patientname">Patient Name</label>
              <div id="patientname">
                <input onChange={handleChange} type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" name='first_name' value={formData.first_name} placeholder="First Name" />
                <input onChange={handleChange} type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" name='last_name' value={formData.last_name} placeholder="Last Name" />
              </div>

              <div className='flex items-center justify-center w-full gap-4 mt-4'>
                <div className='flex flex-col items-start w-full'>
                  <label htmlFor="patientmobileno">Mobile No.</label>
                  <div id="patientmobileno">
                    <input onChange={handleChange} type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" name='mobile_number' value={formData.mobile_number} placeholder="Enter mobile no." />
                  </div>
                </div>

                <div className='flex flex-col items-start w-full'>
                  <label htmlFor="uhid">UHID</label>
                  <div id="uhid">
                    <input onChange={handleChange} type="text" className="w-full h-9 sm:h-auto rounded-lg p-2 m-2 bg-gray-200" name='uhid' value={formData.uhid} placeholder="Enter UHID" />
                  </div>
                </div>
              </div>

            </div>
            
            <div className="flex flex-col items-stretch justify-center w-full mb-4 mt-5">
              <label htmlFor="doctortype">Doctor</label>
              <div id="doctortype">
                <select onChange={handleChange} className="w-full h-9 sm:h-auto border border-gray-300 rounded-lg p-2 m-2" name='doctor' value={formData.doctor}>
                  <option value="">Select...</option>
                  <option value="Dr. ABC">Dr.ABC</option>
                  <option value="Dr. XYZ">Dr.XYZ</option>
                  <option value="Dr. Nothing">Dr. Nothing</option>
                </select>
              </div>
            </div>

            <label htmlFor="date-from-to">Date</label>
            <div id='date-from-to' className='p-5 ml-2 mt-2 border border-gray-300 rounded-lg w-full'>
              <div className="my-2 w-full">
                <label htmlFor="from">From</label>
                <input onChange={handleChange} id="from" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" name='from_date' value={formData.from_date} type="date" />
              </div>
              <div className="my-2 w-full">
                <label htmlFor="to">To</label>
                <input onChange={handleChange} value={formData.to_date} id="to" className="w-full h-9 sm:h-auto p-2 bg-gray-200 rounded-lg ml-2" name='to_date' type="date" />
              </div>
            </div>

            <div className="flex flex-col items-stretch justify-center w-full mb-4 mt-5">
              <label htmlFor="doctortype">Patient Type</label>
              <div id="doctortype">
                <select onChange={handleChange} value={formData.patient_type} className="w-full h-9 sm:h-auto border border-gray-300 rounded-lg p-2 m-2" name='patient_type'>
                  <option value="">Select...</option>
                  <option value="ABC">ABC</option>
                  <option value="XYZ">XYZ</option>
                  <option value="IJK">IJK</option>
                </select>
              </div>
            </div>

            <label htmlFor="advanced-search-option"> Advanced Search Option</label>
            <textarea onChange={handleChange} value={formData.advanced_search_option} className='w-full bg-gray-200 p-2 h-10 rounded-lg mt-2 ml-2' id="advanced_search_option" name='advanced_search_option' ></textarea>

            <button className="p-3 mt-5 text-xs bg-blue-600 rounded-lg text-white">Show</button>
          </form>
        </div>

        {/* Table Section */}
        <div className="lg:col-span-3 h-full rounded-lg bg-gray-100 overflow-scroll scrollbar-hidden">
          <MedicalRecTable table_data={tableData} />
        </div>
        
      </div>

      {/* Buttons Section */}
      <div className="w-full flex flex-wrap items-center justify-end gap-3 h-[10%] rounded-lg">
        <button className="p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white">Call Selected Patient</button>
        <button className="p-3 mt-2 text-xs bg-blue-600 rounded-lg text-white">Case Paper</button>
        <button className="p-3 mt-2 text-xs bg-red-600 rounded-lg text-white">Close</button>
      </div>
    </div>
  )
}

export default MedicalRecords