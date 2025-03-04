import React from 'react'
import { useState } from 'react'
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const CompanySettlement = () => {
    const tabs = [
        {id: 'tab1', label: 'Company Settlement'},
        {id: 'tab2', label: 'Browse Receipt'},
    ]
    const tabContent = {
        tab1: (
            <Tab1/>
        ),
        tab2: (
            <Tab2/>
        ),
    }
    const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className='w-full h-screen  rounded-lg  p-5 scrollbar-hidden'>
        <h1 className='text-3xl font-semibold'>Company Settlement</h1>
        
        {/* Tabbed Interface Start */}
        <div className='max-w-full h-auto   rounded-xl py-3 px-4 mt-5  '>
            {/* Tabs */}
            <div className='flex flex-wrap'>
                {tabs.map((tab) => (
                    <button onClick={() => setActiveTab(tab.id)} key={tab.id} className={`px-4 py-2 font-semibold ${activeTab === tab.id ? "border-b border-purple-500 text-purple-500": "text-gray-500 hover:text-purple-500"}`}>{tab.label}</button>
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

export default CompanySettlement