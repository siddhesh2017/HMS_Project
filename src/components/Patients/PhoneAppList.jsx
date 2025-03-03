import React from 'react';
import Table from '../Tables/Table';

const Temp = () => {

const TABLE_HEAD = ["Seq no.", "Date", "Patient Name", "Mobile", "App. type", "App. Date", "App. Time", "Dept. Name", "Doctor Name", "Doc. Mob.", "Ref Doc Name", "Appt Given", "Appt Kept"];
 
// Hard Coded data for tables, later to be fetched from endpoints
const TABLE_ROWS = [
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },  
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
  {
    seq_no: "1",
    date: "03/03/2025",
    patient_name: "Om Jagtap",
    mobile: "9699584472",
    app_type: "New",
    app_date: "03/03/2025",
    app_time: "10:00 AM",
    dept_name: "Cardiology",
    doctor_name: "Dr. Ramesh Jain",
    doc_mob: "9999999999",
    ref_doc_name: "Dr. ABC",
    appt_given: "Yes",
    appt_kept: "Yes",
    
  },
];

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
