import React from 'react'
import Sidebar from './components/dashboard/SideBar'
import MainContent from './components/dashboard/MainContent'
import { useState } from'react'
import Footer from './components/dashboard/Footer'


const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      <>
        <div className="h-screen flex bg-blue-400 pr-3 pt-4 pb-8">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <MainContent />
        </div>
        <Footer/>
      </>
  )
}

export default App