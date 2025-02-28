import { Box, ChevronDown, Home, Menu, FileSpreadsheet, User, Package, X, ShieldUser, ClipboardMinus, GraduationCap, Tally5, FileSearch2 } from 'lucide-react';
import { useState } from 'react';
import CLI_LOGO from '../../../../public/clinovations logo.jpeg'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState('');

  const navItems = [
    { title: 'Patient ', 
      icon: Home, 
      hasDropdown: true,
      dropdownItems: ['OPD', 'IPD',]
     },
    { 
      title: 'Nursing', 
      icon: User,
    },
    { 
      title: 'OT Details', 
      icon: FileSpreadsheet,
      hasDropdown: true,
      dropdownItems: ['Inbox', 'Sent', 'Drafts', 'Archived']
    },
    { title: 'Investigation', icon: FileSearch2, hasDropdown: false },
    {
      title: 'Inventory',
      icon: Package,
      hasDropdown: true,
      dropdownItems: ['Preferences', 'Security', 'Notifications']
    },
    { title: 'MRD', icon: Box, hasDropdown: false },
    { title: 'NABH', icon: Box, hasDropdown: false },
    { title: 'Administration', icon: ShieldUser, hasDropdown: false },
    { title: 'Tally Interface', icon: Tally5, hasDropdown: false },
    { title: 'Masters', icon: GraduationCap, hasDropdown: false },
    { title: 'Reports', icon: ClipboardMinus, hasDropdown: false },
    { title: 'Login', icon: ClipboardMinus, hasDropdown: false },

  ];

  return (

    // SideBar Outer div

    <div 
      className={`bg-white   scrollbar-hidden text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-lg ml-4 border-[rgba(0,0,0,0.09)] 
        ${isOpen ? 'w-88 xs:overflow-hidden' : 'w-17'} `}
    >

      {/* SideBar Header */}

      <div className={`py-2.5 px-4 w-auto flex justify-between ${isOpen ? 'absolute z-10 bg-white ' : 'bg-transparent'} justify-around items-center `}>
        <img src={CLI_LOGO} className={`w-15 h-15 transition-all duration-300  ${isOpen ? '' : 'invisible hidden '}`}/>
        <div>
          <h1 className={` font-bold overflow-hidden transition-all duration-300 text-xl text-nowrap text-gray-800
            ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
            Clinovations 
          </h1>
          <h1 className={` -mt-2 font-bold overflow-hidden transition-all duration-300 text-xl text-nowrap text-gray-800
            ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
            Systems
          </h1>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`hover:bg-blue-100 p-2 transition-all duration-300 ${isOpen? 'ml-20' : ''} rounded-lg bg-blue-200`}
        >
          {isOpen ? <Menu size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5}  />}
        </button>
      </div>

      <nav className={`${isOpen? 'mt-20' : ''} relative `}>
        
        {/* SideBar Options */}
        
        {navItems.map((item) => (
          <div key={item.title}>
            <div 
              className="px-4 py-3 hover:bg-blue-200 rounded-lg m-2 cursor-pointer flex items-center justify-between"
              onClick={() => item.hasDropdown && isOpen && setActiveDropdown(activeDropdown === item.title ? '' : item.title)}
            >
              <div className="flex items-center">
                <item.icon size={20} strokeWidth={1.5} color='#000' />
                <span className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                  ${isOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}>
                  {item.title}
                </span>
              </div>
              {item.hasDropdown && isOpen && (
                <ChevronDown 
                  size={16} 
                  strokeWidth={1.5}
                  className={`transition-transform duration-200 
                    ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                />
              )}
            </div>
            
              {/* SideBar Dropdown Options */}

            {item.hasDropdown && isOpen && activeDropdown === item.title && (
              <div className="bg-blue-200 overflow-hidden rounded-lg mx-2 transition-all duration-800">
                {item.dropdownItems.map((dropdownItem) => (
                  <div
                    key={dropdownItem}
                    className="px-11 py-2 hover:bg-blue-100 cursor-pointer text-sm"
                  >
                    {dropdownItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;