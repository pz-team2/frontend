import { useState } from 'react';
import { FcDataConfiguration } from "react-icons/fc";
import { Link, useLocation } from 'react-router-dom';
import gambar from '../assets/img/goevent.png';

interface MenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

interface dataSidebar {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<dataSidebar> = ({menuItems}) => {

  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className='flex h-screen'>
      <div className={`hidden sm:flex bg-slate-100 text-black transition-all duration-300 shadow-2xl ${open ? 'w-64' : 'w-20'} h-full flex-col`}>
        <div className='flex items-center justify-center p-4 mt-11 mb-11'>
          <button onClick={handleToggle} className="focus:outline-none">
            {open ? (
              <div className="flex flex-col items-center justify-center">
                <img src={gambar} alt="Logo" className='w-32 mx-auto' />
              </div>
            ) : (
              <div className='p-4 rounded-lg bg-slate-50 shadow-xl'>
                <FcDataConfiguration size={20} />
              </div>
            )}
          </button>
        </div>

        <ul className='mt-3 space-y-2 flex-1'>
          {menuItems.map((item, index) => (
            <li key={index} className={`px-6 ${open ? 'w-56' : 'w-30'}`}>
              <Link
                to={item.path}
                className={`flex items-center p-2 font-semibold transition-all duration-75 ${location.pathname === item.path ? 'rounded-full text-center shadow-md text-white' : ''}`}
                style={{
                  backgroundColor: location.pathname === item.path ? '#12496E' : '',
                  borderRadius: '50px',
                  font: 'message-box',
                  fontSize: '16px',
                }}
              >
                <span className={`transition-all duration-150 flex items-center justify-center`}>{item.icon}</span>
                <span className={`transition-all ml-4 duration-300 ${open ? 'opacity-100 w-auto' : 'opacity-0 w-20'} overflow-hidden`}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='block sm:hidden fixed bottom-0 left-0 right-0 bg-slate-100 shadow-2xl z-50'>
        <ul className='flex justify-around py-2'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center p-2 ${location.pathname === item.path ? 'text-secondary' : 'text-gray-600'}`}
              >
                <span>{item.icon}</span>
                <span className="text-xs font-medium">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Sidebar;
