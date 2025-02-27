import React from 'react'
import Sidebar from './assets/components/dashboard/SideBar'
import MainContent from './assets/components/dashboard/MainContent'
import { useState } from'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      <>
        <div className="h-screen flex bg-blue-400 pr-3 py-4">
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <MainContent />
      </div>
      </>
  )
}

export default App