import React from 'react';
import { Plus } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className="flex-1 h-full overflow-hidden">
      <div className="bg-white ml-4 border-2 rounded-md border-[rgba(0,0,0,0.08)]  h-full p-1 shadow-sm flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContent;