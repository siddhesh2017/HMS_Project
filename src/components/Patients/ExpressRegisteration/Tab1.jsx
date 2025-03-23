import React from 'react'
import { useState } from 'react'
import DynamicTable from '../../Tables/DynamicTable';
import { Card, Typography } from "@material-tailwind/react";


const Tab1 = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e) => {}
    
    const columns = [
        { 
          id: 'service_name', 
          label: 'Service Name', 
          accessor: 'service_name' 
        },
        { 
          id: 'price', 
          label: 'Price', 
          accessor: 'price' 
        },
        { 
          id: 'quantity', 
          label: 'Quantity', 
          accessor: 'quantity' 
        },
        { 
          id: 'total_amount', 
          label: 'Total Amount', 
          accessor: 'total_amount' 
        },
      ];

    const TABLE_ROWS =  [
        {
            service_name: "Service 1",
            price: "1000",
            quantity: "1",
            total_amount: "1000"
        },
        {
            service_name: "Service 1",
            price: "1000",
            quantity: "1",
            total_amount: "1000"
        },
        {
            service_name: "Service 1",
            price: "1000",
            quantity: "1",
            total_amount: "1000"
        },
        {
            service_name: "Service 1",
            price: "1000",
            quantity: "1",
            total_amount: "1000"
        },
        {
            service_name: "Service 1",
            price: "1000",
            quantity: "1",
            total_amount: "1000"
        },
        {
            service_name: "Service 1",
            price: "1000",
            quantity: "1",
            total_amount: "1000"
        },
      ];

  return (
    <div className='w-full h-full rounded-b-lg bg-gray-100 overflow-x-hidden p-2 sm:p-3'>
        <form className='w-full h-full'>
            {/* Personal Details Section */}
            <fieldset className='border-1 border-gray-400 rounded-lg p-2 sm:p-5'>
                <legend className='p-1 sm:p-2 text-sm sm:text-xl'>Personal Details</legend>
            {/* Name Section */}
                <label className='text-[11px] sm:text-[15px]' htmlFor="patientname">Patient Name</label>
                <div id="patientname" className='mt-1 flex flex-wrap lg:flex-nowrap'>
                    <select name="prefix" id="prefix" className='xl:w-1/4 h-8 xl:h-auto text-[10px] lg:text-[15px] rounded-lg px-2 m-2 bg-gray-200 '>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                    </select>
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='first_name' value={formData.first_name} placeholder="First Name" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='middle_name' value={formData.middle_name} placeholder="Middle Name" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='last_name' value={formData.last_name} placeholder="Last Name" />
                </div>
            {/* Gender Blood Marital Section 1 */}
                <div className='mt-1 w-full flex flex-col gap-5  sm:pr-5 flex-wrap md:flex-nowrap md:flex-row'>

                    <div className='w-full flex flex-col gap-1 sm:gap-2'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" className=' mx-2 md:mx-3 md:my-2 w-auto sm:w-full md:w-full  h-8 xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className='w-full  flex flex-col gap-1 sm:gap-2'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="blood_group">Blood Group</label>
                        <select name="blood_group" id="blood_group" className=' mx-2 md:mx-3 md:my-2 w-auto sm:w-full md:w-full  h-8 xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="O">O</option>
                        </select>
                    </div>

                    <div className='w-full  flex flex-col gap-1 sm:gap-2'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="marital_status">Marital Status</label>
                        <select name="marital_status" id='marital_status' className=' mx-2 md:mx-3 md:my-2 w-auto sm:w-full md:w-full  h-8 xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                            <option value="married">Married</option>
                            <option value="un_married">Un-Married</option>
                        </select>
                    </div>

                </div>
            {/* DOB Height and Weight Section 2 */}
                <div className='mt-4 sm:mt-4 mb-3 items-center justify-start gap-0 sm:gap-10 flex flex-wrap'>
                    
                    {/* DOB Section */}
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="date_of_birth">Date of Birth</label>
                        <div className='flex'>
                            <input id='date_of_birth' onChange={handleChange} type="number" className="w-15 text-[10px] lg:text-[15px] xl:w-20 h-8 xl:h-10 rounded-lg p-2 mx-2 bg-gray-200" name='day' value={formData.last_name} placeholder="Day" />
                            <input id='date_of_birth' onChange={handleChange} type="number" className="w-15 text-[10px] lg:text-[15px] xl:w-20 h-8 xl:h-10 rounded-lg p-2 mx-2 bg-gray-200" name='month' value={formData.last_name} placeholder="Month" />
                            <input id='date_of_birth' onChange={handleChange} type="number" className="w-15 text-[10px] lg:text-[15px] xl:w-20 h-8 xl:h-10 rounded-lg p-2 mx-2 bg-gray-200" name='year' value={formData.last_name} placeholder="Year" />
                        </div>
                    </div>

                    {/* Weight & Height Section */}
                    <div className='mt-4 flex flex-col gap-1 sm:gap-2'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="weight_height">Weight & Height</label>
                        <div id='weight_height'>
                            <input  onChange={handleChange} type="number" className="w-20 text-[10px] lg:text-[15px] xl:w-20 h-8 xl:h-10 rounded-lg p-2 mx-2 bg-gray-200" name='weight' value={formData.weight} placeholder="weight" />
                            <input  onChange={handleChange} type="number" className="w-20 text-[10px] lg:text-[15px] xl:w-20 h-8 xl:h-10 rounded-lg p-2 mx-2 bg-gray-200" name='height' value={formData.height} placeholder="height" />
                        </div>
                    </div>
                </div>
            </fieldset>

            {/* Contact Details Section */}
            <fieldset className='border-1 border-gray-400 rounded-lg p-2 sm:p-5'>
                <legend className='p-1 sm:p-2 text-sm sm:text-xl'>Contact Details</legend>
                <div id="patientname" className='mt-1 flex justify-between flex-wrap lg:flex-nowrap'>
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='first_name' value={formData.mobile} placeholder="Mobile Number" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='middle_name' value={formData.alternate_number} placeholder="Alternate Mobile Number" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='last_name' value={formData.email} placeholder="Email" />
                </div>
            </fieldset>

            {/* Address Section */}
            <fieldset className='border-1 border-gray-400 rounded-lg p-2 sm:p-5'>
                <legend className='p-1 sm:p-2 text-sm sm:text-xl'>Address</legend>
                <div id="patientname" className='mt-1 flex justify-between flex-wrap lg:flex-nowrap'>
                    
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='first_name' value={formData.first_name} placeholder="Address" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='middle_name' value={formData.middle_name} placeholder="Pin Code" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='last_name' value={formData.last_name} placeholder="Taluka" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='last_name' value={formData.last_name} placeholder="State" />
                    <input onChange={handleChange} type="text" className="w-full xl:w-1/4 h-8 xl:h-auto  text-[10px] lg:text-[15px]   rounded-lg p-2 m-2 bg-gray-200" name='last_name' value={formData.last_name} placeholder="Country" />
                </div>
            </fieldset>

            {/* Visitor Details Section */}
            <fieldset className='border-1 border-gray-400 rounded-lg p-2 sm:p-5 '>
                <legend className='p-1 sm:p-2 text-sm sm:text-xl'>Visitor Detail's</legend>
                <div id="patientname" className='mt-1 flex flex-col flex-wrap lg:flex-nowrap'>
                    
                    {/* Date & Time Section */}
                    <label className='text-[13px] lg:text-[15px]' htmlFor="date">Visiting Date</label>
                    <div id='date' className='p-3 sm:p-5 sm:ml-2 mt-2 border border-gray-300 rounded-lg  w-auto flex flex-wrap md:flex-nowrap gap-0 sm:gap-5'>
                        <div className=" my-1 sm:my-2 w-full">
                            <label className='text-[11px] lg:text-[15px]' htmlFor="from">Date</label>
                            <input id="from" className="w-full h-8 sm:h-auto sm:p-2 bg-gray-200 rounded-lg sm:ml-2 text-[10px] lg:text-[15px]" type="date" />
                        </div>
                        <div className=" my-1 sm:my-2 w-full">
                            <label className='text-[11px] lg:text-[15px]' htmlFor="time">Time</label>
                            <input id="time" className="w-full h-8 sm:h-auto sm:p-2 bg-gray-200 rounded-lg sm:ml-2 text-[10px] lg:text-[15px]" type="time" />
                        </div>
                    </div>

                    {/* Dropdown Options Section 1 */}
                    <div className='p-2 sm:p-5 flex flex-wrap md:flex-nowrap mt-0 2xl:mt-2 gap-3 md:gap-6 lg:gap-10'>
                        {/* Hospital Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Hospital</label>
                            <select name="hospital" id="hospital" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="MIT Hospital">MIT Hospital</option>
                                    <option value="Nobal Hospital">Nobal Hospital</option>
                            </select>
                        </div>

                        {/* Patient Type Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Patient Type</label>
                            <select name="gender" id="gender" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="Self">Self</option>
                                    <option value="Family">Family</option>
                            </select>
                        </div>

                        {/* Company Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Company</label>
                            <select name="gender" id="gender" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="">Select...</option>
                                    <option value="Cipla">Cipla</option>
                            </select>
                        </div>

                        {/* Tariff Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Tariff</label>
                            <select name="gender" id="gender" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="HOSPITAL">HOSPITAL</option>
                                    <option value="Random">Random</option>
                            </select>
                        </div>
                    </div>

                    {/* Dropdown Options Section 2 */}
                    <div className='p-2 sm:p-5 flex flex-wrap md:flex-nowrap mt-0 2xl:mt-2 gap-3 md:gap-6 lg:gap-10'>
                        {/* Dept Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="dept">Dept</label>
                            <select name="dept" id="dept" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="">Select...</option>
                                    <option value="Neurology">Neurology</option>
                            </select>
                        </div>

                        {/* Doctor Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="doctor">Doctor</label>
                            <select name="doctor" id="doctor" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="Dr.Bide">Dr. Bide</option>
                                    <option value="Female">Female</option>
                            </select>
                        </div>

                        {/* Cabin Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="cabin">Cabin</label>
                            <select name="cabin" id="cabin" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="">Select...</option>
                                    <option value="Cabin-1">Cabin-1</option>
                            </select>
                        </div>

                        {/* Ref Doctor Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="ref_doctor">Ref Doctor</label>
                            <select name="ref_doctor" id="ref_doctor" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="Dr. Chandu">Dr. Chandu</option>
                                    <option value="Dr. Laal Mhate">Dr. Laal Mhate</option>
                            </select>
                        </div>
                    </div>

                    {/* Dropdown Options Section 3 */}
                    <div className='p-2 sm:p-5 flex flex-wrap md:flex-nowrap mt-0 2xl:mt-2 gap-3 md:gap-6 lg:gap-10'>
                        {/* Other Doctor Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Other Doctor</label>
                            <select name="other_doctor" id="other_doctor" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                    <option value="doctor">Doctor</option>
                                    <option value="doctor2">Doctor2</option>
                            </select>
                        </div>

                        {/* Prov. Diag Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Prov. Diag</label>
                            <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                        </div>

                        {/* Only Visit Option */}
                        <div className='w-full flex items-center sm:mt-6 justify-center gap-2'>
                            <input id="only_visit" name='only_visit' className=" h-8 xl:h-10 sm:h-auto  bg-gray-200 rounded-lg sm:ml-7 md:ml-9 lg:ml-13 xl:ml-20  text-[12px] lg:text-[15px]" type="checkbox" />
                            <label className='w-full text-[10px] lg:text-[15px]' htmlFor="only_visit">Only Visit</label>
                        </div>

                        {/* Visit Flag Option */}
                        <div className='w-full flex flex-col gap-1 sm:gap-2'>
                            <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Visit Flag</label>
                            <input id="prov_diag" name='prov_diag' className="w-full h-8 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-2 text-[10px] lg:text-[15px]" type="text" placeholder='First Visit'/>
                        </div>
                    </div>
                </div>
            </fieldset>

            {/* Relative Details Section */}
            <fieldset className='border-1 border-gray-400 rounded-lg p-2 sm:p-5'>
                <legend className='p-1 sm:p-2 text-sm sm:text-xl'>Relative Detail's</legend>
                <div id="patientname" className='mt-1 flex justify-between gap-5 sm:gap-10 flex-wrap lg:flex-nowrap'>
                    
                    {/* Relative Name Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2 ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Relative Name</label>
                        <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                    </div>

                    {/* Address Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2 ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Address</label>
                        <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                    </div>

                    {/* Phone No. Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2 ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Phone No.</label>
                        <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                    </div>

                    {/* Relation Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2 ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Relation</label>
                        <select name="other_doctor" id="other_doctor" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                <option value="">Select...</option>
                                <option value="Mother">Mother</option>
                                <option value="Father">Father</option>
                        </select>
                    </div>
                        
                </div>
            </fieldset>

            {/* Additional Details Options */}
            <fieldset className='border-1  border-gray-400 rounded-lg p-2 sm:p-5'>
                <legend className='p-1 sm:p-2 text-sm sm:text-xl'>Additional Detail's</legend>
                <div id="patientname" className='mt-1 flex justify-between gap-3 sm:gap-10 flex-wrap lg:flex-nowrap'>
                    {/* Service Name Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2  ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Service Name</label>
                        <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                    </div>

                    {/* Price Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2  ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Price</label>
                        <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                    </div>

                    {/* Quantity Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2  ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Quantity</label>
                        <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                    </div>        
                </div>

                <div className='mt-5 mb-13 flex items-end justify-between gap-5 sm:gap-10 flex-wrap lg:flex-nowrap'>
                    
                    {/* Doctor name Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2  ml-2 pr-2 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px]' htmlFor="gender">Doctor Name</label>
                        <select name="other_doctor" id="other_doctor" className='sm:ml-5 h-8 w-full xl:h-10 text-[10px] lg:text-[15px] bg-gray-200 rounded-lg'>
                                <option value="">Select...</option>
                                <option value="Mother">Mother</option>
                                <option value="Father">Father</option>
                        </select>
                    </div>

                    {/* Total Amount Option */}
                    <div className='w-full flex flex-col gap-1 sm:gap-2 pr-4 sm:pr-5'>
                        <label className='text-[10px] lg:text-[15px] ml-2' htmlFor="gender">Total Amount</label>
                        <input id="prov_diag" name='prov_diag' className="w-full h-8 xl:h-10 sm:h-auto p-1 sm:p-2 bg-gray-200 rounded-lg ml-2 sm:ml-5 text-[10px] lg:text-[15px]" type="text" />
                    </div>

                    {/* Add Service Option */}
                    <div className='w-auto flex flex-col sm:gap-2 pr-2 sm:pr-5'>
                        <button id="prov_diag" name='prov_diag' className="w-auto sm:w-20 md:w-40 h-10 xl:h-13 sm:h-auto p-1 sm:p-2 bg-blue-500 rounded-lg sm:ml-5 text-[10px] lg:text-[15px]" type="text" >Add Service</button>
                    </div>
                </div>
            </fieldset>

            {/* Table Section */}
                <div className='flex flex-col mt-5 text-[10px] lg:text-[15px]'>
                    <DynamicTable 
                        columns={columns} 
                        data={TABLE_ROWS}
                        showBorder={true}
                        className="mt-4"
                    />
                    <div className='w-full h-auto mt-5 p-3 border-[0.5px] rounded-lg border-gray-400'>
                        <div className='w-full h-auto flex flex-wrap sm:flex-nowrap gap-3 sm:gap-5'>
                            <div className='w-full h-auto flex flex-col gap-0 sm:gap-2'>
                                <label htmlFor="total_amount">Total Amount</label>
                                <input id='total_amount' type="text" className='h-8 sm:h-10 w-full bg-gray-200 border-[0.1px] border-gray-400 rounded-lg' />
                            </div>
                            <div className='w-full h-auto flex flex-col gap-0 sm:gap-2'>
                                <label htmlFor="total_amount">Discount Amount</label>
                                <input id='total_amount' type="text" className='h-8 sm:h-10 w-full bg-gray-200 border-[0.1px] border-gray-400 rounded-lg' />
                            </div>
                            <div className='w-full h-auto flex flex-col gap-0 sm:gap-2'>
                                <label htmlFor="total_amount">Net Amount</label>
                                <input id='total_amount' type="text" className='h-8 sm:h-10 w-full bg-gray-200 border-[0.1px] border-gray-400 rounded-lg' />
                            </div>
                        </div>
                        <div className='mt-5 flex gap-10 items-center'>
                            <div className='w-auto h-auto flex flex-col gap-0'>
                                <label htmlFor="total_amount">Net Amount</label>
                                <input id='total_amount' type="text" className='h-8 sm:h-10 w-full bg-gray-200 border-[0.1px] border-gray-400 rounded-lg' />
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <label htmlFor="total_amount">Cash</label>
                                <input id='total_amount' type="checkbox" className='bg-gray-200 border-[0.1px] rounded-lg' />
                            </div>
                        </div>
                    </div>
                </div>
        </form>
    </div>
  )
}

export default Tab1


                    