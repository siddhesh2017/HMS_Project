import { useState } from 'react';
import { ChevronDown, Home, User, FileSpreadsheet, FileSearch2, Package, Box, ShieldUser, Tally5, GraduationCap, ClipboardMinus, KeyRound, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CLI_LOGO from '/clinovations logo.jpeg';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [activeSubDropdown, setActiveSubDropdown] = useState('');
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState(''); // New state for sub-sub-dropdown
  const navigateTo = useNavigate();

  const navItems = [
    { 
      title: 'Patient', 
      icon: Home, 
      hasDropdown: true,
      dropdownItems: [
        { 
          title: 'OPD', hasSubDropdown: true, subItems: ['Phone Appoinment', 'Phone Appoinment List', 'Registeration', 'Queue Management', 'Medical Records', 'OPD Bills', 'OPD Settlement', 'Bill Refund', 'View OPD Bills and Receipts', 'Followup List', 'Visitor Management', 'Courier Management', 'Vaccination'],
        },
        { 
          title: 'IPD', hasSubDropdown: true, subItems: ['Admission', 'Patient Recived', 'IPD Advanced', 'Add Services (Bill)', 'Discharge', 'Refund', 'Bed Transfer', 'View Pathelogy Report', 'View IPD Bills and Receipts', 'IPD Settlement', 'Bed View', 'Patient Display', 'Bed Release', 'Due', 'IPD Smart Access', 'Relative Bed Allocation', 'Relative BedDeAllocation'],
        }
      ]
    },
    { 
      title: 'User', 
      icon: User, 
      hasDropdown: false
    },
    { 
      title: 'Reports', 
      icon: FileSpreadsheet, 
      hasDropdown: false
    },
    { 
      title: 'Search', 
      icon: FileSearch2, 
      hasDropdown: false
    },
    { 
      title: 'Inventory', 
      icon: Package, 
      hasDropdown: false
    },
    { 
      title: 'Dashboard', 
      icon: Box, 
      hasDropdown: false
    },
    { 
      title: 'Security', 
      icon: ShieldUser, 
      hasDropdown: false
    },
    { 
      title: 'Statistics', 
      icon: Tally5, 
      hasDropdown: false
    },
    { 
      title: 'Academics', 
      icon: GraduationCap, 
      hasDropdown: false
    },
    { 
      title: 'Documents', 
      icon: ClipboardMinus, 
      hasDropdown: false
    },
    { 
      title: 'Settings', 
      icon: KeyRound, 
      hasDropdown: false
    },
    { 
      title: 'Login', 
      icon: User, 
      hasDropdown: false
    }
  ];

  const handleClick = (subItem) => {
    const routeMap = {
      'Phone Appoinment': '/patient/appoinment',
      'Phone Appoinment List': '/patient/appoinmentlist',
      // Removed 'Registeration' from routeMap
      'Queue Management': '/patient/queue-management',
      'Medical Records': '/patient/medical-records',
      'OPD Bills': '/patient/opd-bills',
      'OPD Settlement': '/patient/opd-settlement',
      'Bill Refund': '/patient/bill-refund',
      'View OPD Bills and Receipts': '/patient/view-opd-bills-and-receipts',
      'Followup List': '/patient/followup-list',
      'Visitor Management': '/patient/visitor-management',
      'Courier Management': '/patient/courier-management',
      'Vaccination': '/patient/vaccination',
    };

    if (routeMap[subItem]) {
      navigateTo(routeMap[subItem]);
    }
  };

  return (
    <div className={`bg-white scrollbar-hidden text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-lg ml-4 border-[rgba(0,0,0,0.09)] ${isOpen ? 'w-88 xs:overflow-hidden' : 'w-17'}`}>
      {/* SideBar Header */}
      <div className={`py-2.5 flex justify-between ${isOpen ? 'absolute z-10 bg-white px-5' : 'bg-transparent px-4'} justify-around items-center`}>
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
              <div className="bg-gray-100 ml-2 pl-4 py-2 pr-1 border-l-1 transition-all duration-800">
                {item.dropdownItems.map((dropdownItem) => (
                  <div key={dropdownItem.title}>
                    <div 
                      className="px-11 py-2 rounded-lg hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                      onClick={() => {
                        dropdownItem.hasSubDropdown && setActiveSubDropdown(activeSubDropdown === dropdownItem.title ? '' : dropdownItem.title);
                      }}
                    >
                      {dropdownItem.title}
                      {dropdownItem.hasSubDropdown && (
                        <ChevronDown size={14} strokeWidth={1.5} className={`transition-transform duration-200 ${activeSubDropdown === dropdownItem.title ? 'rotate-180' : ''}`} />
                      )}
                    </div>
                    {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.title && (
                      <div className="my-2 p-2 border-l-1 bg-gray-200 transition-all duration-800">
                        {dropdownItem.subItems.map((subItem) => (
                          <div key={subItem}>
                            <div 
                              className="px-10 py-2 rounded-lg hover:bg-blue-200 cursor-pointer flex justify-between items-center"
                              onClick={() => {
                                // Check if subItem is 'Registeration' and open sub-sub-dropdown
                                if (subItem === 'Registeration') {
                                  setActiveSubSubDropdown(activeSubSubDropdown === subItem ? '' : subItem);
                                } else {
                                  handleClick(subItem);
                                }
                              }} 
                            >
                              <span>{subItem}</span>
                              {subItem === 'Registeration' && (
                                <ChevronDown 
                                  size={14} 
                                  strokeWidth={1.5} 
                                  className={`transition-transform duration-200 ${activeSubSubDropdown === subItem ? 'rotate-180' : ''}`} 
                                />
                              )}
                            </div>

                            {/* Sub-Sub Dropdown for Registeration */}
                            {subItem === 'Registeration' && activeSubSubDropdown === 'Registeration' && (
                              <div className="my-2 p-2 bg-gray-300 transition-all duration-800">
                                <button className="px-16 py-2 w-full text-left rounded-lg hover:bg-blue-300 cursor-pointer">Sub Item 1</button>
                                <button className="px-16 py-2 w-full text-left rounded-lg hover:bg-blue-300 cursor-pointer">Sub Item 2</button>
                              </div>
                            )}
                          </div>
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
