import React from 'react'
import { useState } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const ExpressRegisteration = () => {
    const tabs = [
        {id: 'tab1', label: 'Express Registeration'},
        {id: 'tab2', label: 'List of Phone Appoinment'},
        {id: 'tab3', label: 'Search Visits'},
    ]
    const tabContent = {
        tab1:(
            <Tab1/>
        ),
        tab2:(
            <Tab2/>
        ),
        tab3:(
            <Tab3/>
        )
    }

    const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className='w-full h-full p-2 sm:p-5 rounded-lg overflow-scroll'>
        <h1 className='text-lg sm:text-3xl font-semibold' >Express Registeration</h1>

        {/* Tabbed Interface Start */}
        <div className='max-w-full rounded-xl py-1 sm:py-3.5   mt-2.5 sm:mt-5 bg-gray-100 px-3 h-auto '>
            {/* Tabs */}
            <div className='flex justify-start items-center'>
                {tabs.map((tab) => (
                    <button onClick={() => setActiveTab(tab.id)} key={tab.id} className={`px-1 sm:px-4 text-[10px] leading-3  md:text-[12px]  lg:text-[15px] py-1 sm:py-2 font-semibold ${activeTab === tab.id ? "border-b border-purple-500 text-purple-500": "text-gray-500 hover:text-purple-500"}`}>{tab.label}</button>
                ))}
            </div>
            {/* Tab Content */}
            <div className='w-full h-full py-2 '>
                {tabContent[activeTab]}
            </div>
        </div>
    </div>
  )
}

export default ExpressRegisteration