import { Box, ChevronDown, Home, Menu, FileSpreadsheet, User, Package, X, ShieldUser, ClipboardMinus, GraduationCap, Tally5, FileSearch2, KeyRound, QrCode } from 'lucide-react';
import { useState } from 'react';
import CLI_LOGO from '/clinovations logo.jpeg'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeSubDropdown, setActiveSubDropdown] = useState('');
  const navigateTo = useNavigate();

  const navItems = [
    { 
      title: 'Patient', 
      icon: Home, 
      hasDropdown: true,
      dropdownItems: [
        { title: 'OPD', hasSubDropdown: true, subItems: ['Phone Appoinment', 'Phone Appoinment List', 'Registeration', 'Queue Management', 'Medical Records', 'OPD Bills', 'OPD Settlement', 'Bill Refund', 'View OPD Bills and Receipts', 'Followup List', 'Visitor Management', 'Courier Management', 'Vaccination'] },
        { title: 'IPD', hasSubDropdown: true, subItems: ['Admission', 'Patient Recived', 'IPD Advanced', 'Add Services (Bill)', 'Discharge', 'Refund', 'Bed Transfer', 'View Pathelogy Report', 'View IPD Bills and Receipts', 'IPD Settlement', 'Bed View', 'Patient Display', 'Bed Release', 'Due', 'IPD Smart Access', 'Relative Bed Allocation', 'Relative BedDeAllocation'] }
      ]
    },
    { title: 'Nursing', icon: User },
    { 
      title: 'OT Details', 
      icon: FileSpreadsheet,
      hasDropdown: true,
      dropdownItems: [
        { title: 'Inbox', hasSubDropdown: false },
        { title: 'Sent', hasSubDropdown: false },
        { title: 'Drafts', hasSubDropdown: false },
        { title: 'Archived', hasSubDropdown: false }
      ]
    },
    { title: 'Investigation', icon: FileSearch2 },
    { 
      title: 'Inventory',
      icon: Package,
      hasDropdown: true,
      dropdownItems: [
        { title: 'Preferences', hasSubDropdown: false },
        { title: 'Security', hasSubDropdown: false },
        { title: 'Notifications', hasSubDropdown: false }
      ]
    },
    { title: 'MRD', icon: Box },
    { title: 'NABH', icon: Box },
    { title: 'Administration', icon: ShieldUser },
    { title: 'Tally Interface', icon: Tally5 },
    { title: 'Masters', icon: GraduationCap },
    { title: 'Reports', icon: ClipboardMinus },
    { title: 'Login', icon: KeyRound }
  ];

  return (
    <div className={` bg-white scrollbar-hidden text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-lg ml-4 border-[rgba(0,0,0,0.09)] ${isOpen ? 'w-88 xs:overflow-hidden' : 'w-17'}`}>
  {/* SideBar Header */}
      <div className={`py-2.5  flex justify-between ${isOpen ? 'absolute z-10 bg-white px-5' : 'bg-transparent px-4'} justify-around items-center`}>
        <img src={CLI_LOGO} className={`w-15 h-15 transition-all duration-300 ${isOpen ? '' : 'invisible hidden'}`} />
        <div>
          <h1 className={`font-bold transition-all duration-300 text-xl text-gray-800 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Clinovations </h1>
          <h1 className={`font-bold transition-all duration-300 text-xl text-gray-800 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}> Systems</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className={`hover:bg-blue-100 p-2 transition-all duration-300 ${isOpen ? 'ml-20' : ''} rounded-lg bg-blue-200`}>
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>

  {/* DropDown Menu */}
      <nav className={`${isOpen ? 'mt-20' : ''} relative`}>
        {navItems.map((item) => (
          <div key={item.title}>
            <div 
              className={`px-4 py-3 hover:bg-blue-200 rounded-lg m-2 cursor-pointer flex items-center justify-between ${item.title === 'Login' ? 'bg-blue-500 text-white hover:bg-blue-600 h-16 text-xl font-bold' : ''}`} 
              onClick={() => {
                if (item.title === 'Login') {
                  navigateTo('/login');
                } else {
                  item.hasDropdown && isOpen && setActiveDropdown(activeDropdown === item.title ? '' : item.title);
                }
              }}
            >
              <div className="flex items-center ">
                <item.icon size={20} strokeWidth={1.5} color={item.title === 'Login' ? 'white' : '#000'} />
                <span className={`ml-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>{item.title}</span>
              </div>
              {item.hasDropdown && isOpen && (
                <ChevronDown size={16} strokeWidth={1.5} className={`transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
              )}
            </div>
            {item.hasDropdown && isOpen && activeDropdown === item.title && (
              
  // DropDown Options
              <div className="bg-gray-100 ml-2 pl-4 py-2 pr-1 border-l-1 transition-all duration-800">
                {item.dropdownItems.map((dropdownItem) => (
                  <div key={dropdownItem.title}>
                    <div 
                      className="px-11 py-2 rounded-lg hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                      onClick={() => dropdownItem.hasSubDropdown && setActiveSubDropdown(activeSubDropdown === dropdownItem.title ? '' : dropdownItem.title)}
                    >
                      {dropdownItem.title}
                      {dropdownItem.hasSubDropdown && <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-200 ${activeSubDropdown === dropdownItem.title ? 'rotate-180' : ''}`} />}
                    </div>
                    {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.title && (
                      
  // SubDropDown Options
                      <div className="my-2 p-2 border-l-1 bg-gray-200  transition-all duration-800">
                        {dropdownItem.subItems.map((subItem) => (
                          <div key={subItem} className="px-14 py-2 rounded-lg  hover:bg-blue-200 cursor-pointer">{subItem}</div>
                        ))}
                      </div>
                    )}
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
