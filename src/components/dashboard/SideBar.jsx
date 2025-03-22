import { useState } from 'react';
import { ChevronDown, Home, User, FileSpreadsheet, FileSearch2, Package, Box, ShieldUser, Tally5, GraduationCap, ClipboardMinus, KeyRound, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CLI_LOGO from '/clinovations logo.jpeg';

/**
 * Sidebar Component - Renders a collapsible sidebar with multi-level dropdown navigation
 * @param {boolean} isOpen - Controls whether sidebar is expanded or collapsed
 * @param {function} setIsOpen - Function to toggle sidebar open/close state
 * @returns {JSX.Element} - The rendered sidebar component
 */
const Sidebar = ({ isOpen, setIsOpen }) => {
  // Track which dropdown levels are currently active 
  const [activeDropdown, setActiveDropdown] = useState(''); // Tracks main dropdown (level 1)
  const [activeSubDropdown, setActiveSubDropdown] = useState(''); // Tracks sub dropdown (level 2)
  const [activeSubSubDropdown, setActiveSubSubDropdown] = useState(''); // Tracks sub-sub dropdown (level 3)
  const navigateTo = useNavigate();

  /**
   * Navigation data structure
   * Structure supports up to 3 levels of nesting:
   * 1. Main menu items
   * 2. Dropdown items (shown when clicking a main item)
   * 3. Subdropdown items (shown when clicking a dropdown item)
   * 4. Sub-subdropdown items (shown when clicking a subdropdown item)
   */
  const navItems = [
    { 
      title: 'Patient', 
      icon: Home, 
      hasDropdown: true, // Indicates this item has child items
      dropdownItems: [
        { 
          title: 'OPD', 
          hasSubDropdown: true, // Indicates this dropdown item has child items
          subItems: [
            { title: 'Phone Appoinment', hasSubItems: false },
            { title: 'Phone Appoinment List', hasSubItems: false },
            { 
              title: 'Registeration', 
              hasSubItems: true, // Indicates this sub item has child items (level 3)
              subItems: ['Express', 'Regular']  // Level 3 items can be simple strings
            },
            { title: 'Queue Management', hasSubItems: false },
            { title: 'Medical Records', hasSubItems: false },
            { title: 'OPD Bills', hasSubItems: false },
            { 
              title: 'OPD Settlement', 
              hasSubItems: true,
              subItems: ['OP Patient Payment', 'Company Settlement']
            },
            { title: 'Bill Refund', hasSubItems: false },
            {
               title: 'View OPD Bills and Receipts', 
               hasSubItems: true,
               subItems: ['Bill', 'OPD Receipt', 'OPD Refund', 'Prescriptions']
              },
            { title: 'Followup List', hasSubItems: false },
            {
              title: 'Visitor Management', 
              hasSubItems: true,
              subItems: ['Issue Visitor Pass', 'Collect Visitor Pass']
            },
            { title: 'Courier Management', hasSubItems: false },
            { title: 'Vaccination', hasSubItems: false }
          ]
        },
        { 
          title: 'IPD', 
          hasSubDropdown: true, 
          subItems: [
            { title: 'Admission', hasSubItems: false },
            { title: 'Patient Recived', hasSubItems: false },
            { title: 'IPD Advanced', hasSubItems: false },
            { title: 'Add Services (Bill)', hasSubItems: false },
            { title: 'Discharge', hasSubItems: false },
            { title: 'Refund', hasSubItems: false },
            { title: 'Bed Transfer', hasSubItems: false },
            { title: 'View Pathelogy Report', hasSubItems: false },
            { title: 'View IPD Bills and Receipts', hasSubItems: false },
            { title: 'IPD Settlement', hasSubItems: false },
            { title: 'Bed View', hasSubItems: false },
            { title: 'Patient Display', hasSubItems: false },
            { title: 'Bed Release', hasSubItems: false },
            { title: 'Due', hasSubItems: false },
            { title: 'IPD Smart Access', hasSubItems: false },
            { title: 'Relative Bed Allocation', hasSubItems: false },
            { title: 'Relative BedDeAllocation', hasSubItems: false }
          ]
        }
      ]
    },
    // Other main menu items with simpler structure
    { title: 'Nursing', icon: User, hasDropdown: false },
    { title: 'OT Details', icon: FileSpreadsheet, hasDropdown: false },
    { title: 'Investigation', icon: FileSearch2, hasDropdown: false },
    { title: 'Inventory', icon: Package, hasDropdown: false },
    { title: 'MRD', icon: Box, hasDropdown: false },
    { title: 'NABH', icon: ShieldUser, hasDropdown: false },
    { title: 'Administration', icon: Tally5, hasDropdown: false },
    { title: 'Tally Interface', icon: GraduationCap, hasDropdown: false },
    { title: 'Masters', icon: ClipboardMinus, hasDropdown: false },
    { title: 'Reports', icon: KeyRound, hasDropdown: false },
    { title: 'Login', icon: User, hasDropdown: false }
  ];

  /**
   * Navigate to the appropriate route when a menu item is clicked
   * Uses a mapping of item titles to their respective routes
   * @param {string} subItemTitle - The title of the clicked menu item
   */
  const handleClick = (subItemTitle) => {
    // Map menu item titles to their respective routes
    const routeMap = {
      'Phone Appoinment': '/patient/appoinment',
      'Phone Appoinment List': '/patient/appoinmentlist',
      'Express': '/patient/registeration/express',
      'Regular': '/patient/registeration/regular',
      'Queue Management': '/patient/queue-management',
      'Medical Records': '/patient/medical-records',
      'OPD Bills': '/patient/opd-bills',
      'OP Patient Payment': '/patient/opd-settlement/op-patient-payment',
      'Company Settlement': '/patient/opd-settlement/company-settlement',
      'Bill Refund': '/patient/bill-refund',

      'Bill': '/patient/view-opd-bills-and-receipts/bill',
      'OPD Receipt': '/patient/view-opd-bills-and-receipts/opd-receipt',
      'OPD Refund': '/patient/view-opd-bills-and-receipts/opd-refund',
      'Prescriptions': '/patient/view-opd-bills-and-receipts/prescriptions', 

      'Followup List': '/patient/followup-list',

      'Issue Visitor Pass': '/patient/visitor-management/issue-visitor-pass',
      'Collect Visitor Pass': '/patient/visitor-management/collect-visitor-pass',  
      
      'Courier Management': '/patient/courier-management',
      'Vaccination': '/patient/vaccination',
    };

    // Navigate to the route if it exists in the map
    if (routeMap[subItemTitle]) {
      navigateTo(routeMap[subItemTitle]);
    }
  };

  return (
    // Main sidebar container with responsive width depending on isOpen state
    <div className={`bg-white scrollbar-hidden text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-lg ml-4 border-[rgba(0,0,0,0.09)] ${isOpen ? 'w-88 xs:overflow-hidden' : 'w-17'}`}>
      {/* Sidebar Header - Contains logo, title and toggle button */}
      <div className={`py-2.5 flex justify-between ${isOpen ? 'absolute z-10 bg-white px-5' : 'bg-transparent px-4'} justify-around items-center`}>
        {/* Logo - Hidden when sidebar is collapsed */}
        <img src={CLI_LOGO} className={`w-15 h-15 transition-all duration-300 ${isOpen ? '' : 'invisible hidden'}`} />
        <div>
          {/* Title text - Hidden when sidebar is collapsed */}
          <h1 className={`font-bold transition-all duration-300 text-xl text-gray-800 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Clinovations </h1>
          <h1 className={`font-bold transition-all duration-300 text-xl text-gray-800 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}> Systems</h1>
        </div>
        {/* Toggle button to expand/collapse sidebar */}
        <button onClick={() => setIsOpen(!isOpen)} className={`hover:bg-blue-100 p-2 transition-all duration-300 ${isOpen ? 'ml-20' : ''} rounded-lg bg-blue-200`}>
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Navigation Menu - Adjusted position when sidebar is expanded */}
      <nav className={`${isOpen ? 'mt-20' : ''} relative`}>
        {/* Render all navigation items */}
        {navItems.map((item) => (
          <div key={item.title}>
            {/* Level 1: Main menu item */}
            <div 
              className={`px-4 py-3 hover:bg-blue-200 rounded-lg m-2 cursor-pointer flex items-center justify-between ${item.title === 'Login' ? 'bg-blue-500 text-white hover:bg-blue-600 h-16 text-xl font-bold' : ''}`} 
              onClick={() => {
                // Special case for Login item - direct navigation
                if (item.title === 'Login') {
                  navigateTo('/login');
                } else {
                  // For other items with dropdown, toggle the dropdown visibility
                  item.hasDropdown && isOpen && setActiveDropdown(activeDropdown === item.title ? '' : item.title);
                }
              }}
            >
              {/* Icon and title for main menu item */}
              <div className="flex items-center ">
                <item.icon size={20} strokeWidth={1.5} color={item.title === 'Login' ? 'white' : '#000'} />
                <span className={`ml-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>{item.title}</span>
              </div>
              
              {/* Dropdown arrow - Only shown for items with dropdowns when sidebar is expanded */}
              {item.hasDropdown && isOpen && (
                <ChevronDown 
                  size={16} 
                  strokeWidth={1.5} 
                  className={`transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                />
              )}
            </div>

            {/* Level 2: Dropdown menu - Only visible when parent item is active */}
            {item.hasDropdown && isOpen && activeDropdown === item.title && (
              <div className="bg-gray-100 ml-2 pl-4 py-2 pr-1 border-l-1 transition-all duration-800">
                {/* Render all dropdown items for this main menu item */}
                {item.dropdownItems.map((dropdownItem) => (
                  <div key={dropdownItem.title}>
                    {/* Level 2: Dropdown item */}
                    <div 
                      className="px-11 py-2 rounded-lg hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                      onClick={() => {
                        // Toggle sub-dropdown visibility if this item has sub-items
                        dropdownItem.hasSubDropdown && setActiveSubDropdown(activeSubDropdown === dropdownItem.title ? '' : dropdownItem.title);
                      }}
                    >
                      {dropdownItem.title}
                      
                      {/* Sub-dropdown arrow - Only shown for items with sub-items */}
                      {dropdownItem.hasSubDropdown && (
                        <ChevronDown 
                          size={14} 
                          strokeWidth={1.5} 
                          className={`transition-transform duration-200 ${activeSubDropdown === dropdownItem.title ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </div>

                    {/* Level 3: Sub-dropdown menu - Only visible when parent dropdown item is active */}
                    {dropdownItem.hasSubDropdown && activeSubDropdown === dropdownItem.title && (
                      <div className="my-2 p-2 border-l-1 bg-gray-200 transition-all duration-800">
                        {/* Render all sub-items for this dropdown item */}
                        {dropdownItem.subItems.map((subItem) => (
                          <div key={typeof subItem === 'object' ? subItem.title : subItem}>
                            {/* Level 3: Sub-item - Support both string and object formats */}
                            <div 
                              className="px-10 py-2 rounded-lg hover:bg-blue-200 cursor-pointer flex justify-between items-center"
                              onClick={() => {
                                // Handle both string items and object items with potential sub-items
                                const subItemObj = typeof subItem === 'object' ? subItem : { title: subItem, hasSubItems: false };
                                if (subItemObj.hasSubItems) {
                                  // Toggle sub-sub-dropdown if this item has sub-items
                                  setActiveSubSubDropdown(activeSubSubDropdown === subItemObj.title ? '' : subItemObj.title);
                                } else {
                                  // Otherwise navigate to the corresponding route
                                  handleClick(subItemObj.title);
                                }
                              }} 
                            >
                              {/* Display item title from either string or object */}
                              <span>{typeof subItem === 'object' ? subItem.title : subItem}</span>
                              
                              {/* Sub-sub-dropdown arrow - Only for items with sub-sub items */}
                              {typeof subItem === 'object' && subItem.hasSubItems && (
                                <ChevronDown 
                                  size={14} 
                                  strokeWidth={1.5} 
                                  className={`transition-transform duration-200 ${activeSubSubDropdown === subItem.title ? 'rotate-180' : ''}`} 
                                />
                              )}
                            </div>

                            {/* Level 4: Sub-sub-dropdown menu - Only visible when parent sub-item is active */}
                            {typeof subItem === 'object' && 
                            subItem.hasSubItems && 
                            activeSubSubDropdown === subItem.title && (
                              <div className="my-2 p-2 bg-gray-300 transition-all duration-800">
                                {/* Render all sub-sub items */}
                                {subItem.subItems.map((subSubItem) => (
                                  <button 
                                    key={subSubItem}
                                    className="px-16 py-2 w-full text-left rounded-lg hover:bg-blue-300 cursor-pointer"
                                    onClick={() => handleClick(subSubItem)}
                                  >
                                    {subSubItem}
                                  </button>
                                ))}
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
