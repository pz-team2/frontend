import { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import gambar from '../../assets/img/goevent.png';

interface MenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

interface dataSidebar {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<dataSidebar> = ({ menuItems }) => {

  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className='flex h-screen'>
      <div className={`hidden sm:flex bg-slate-100 text-black transition-width  shadow-2xl ${open ? 'w-64' : 'w-20'} h-full flex-col`}>
        <div className='flex items-center justify-center p-4 mt-11 mb-11'>
          <button onClick={handleToggle} className="focus:outline-none">
            {open ? (
              <div className="flex flex-col items-center justify-center ">
                <img src={gambar} alt="Logo" className='w-32 mx-auto' />
              </div>
            ) : (
              <div className='p-4 rounded-lg bg-slate-50 shadow-xl transition-shadow duration-500 ease-in-out'>
                <AiOutlineBars size={20} />
              </div>
            )}
          </button>
        </div>

        <ul className='mt-3 space-y-3 flex-1 p-2'>
          {menuItems.map((item, index) => (
            <li key={index} className={`${open ? 'w-60' : 'w-20'}`}>
              <Link to={item.path} className={` transition-transform duration-700 ease-in-out flex items-center ml-4 mr-7 p-2 font-medium g-none ${location.pathname === item.path ? 'bg-primary rounded-full text-center shadow-md text-white' : 'text-gray-600 hover:bg-slate-200 hover:text-gray-800'} 
              rounded-full text-center text-lg `}>
                <span className={`transition-all duration-500 flex items-center justify-center ${open ? 'ml-4' : 'ml-0'}`}>{item.icon}</span>
                <span className={`transition-opacity duration-500 ml-4 ${open ? 'opacity-100 w-auto' : 'opacity-0 w-20'} overflow-hidden`}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/logout"
          className={`transition-transform duration-700 ease-in-out flex items-center ml-4 mr-7 p-2 font-medium bg-primary text-white mb-4 ${location.pathname === '/logout' ? '' : 'text-gray-600 hover:bg-blue-950 hover:text-white'} rounded-full text-center text-lg`}>
          <span className={`transition-all duration-500 flex items-center justify-center ${open ? 'ml-4' : 'ml-0'}`}><FaSignOutAlt className="mr-2" /> </span>
          <span className={`transition-opacity duration-500 ml-4 ${open ? 'opacity-100 w-auto' : 'opacity-0 w-20'} overflow-hidden`}>Logout</span>
        </Link>
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
