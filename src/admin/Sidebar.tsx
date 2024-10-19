import { useState } from 'react';
import { FcDataConfiguration } from "react-icons/fc";
import { VscOrganization } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa6";
import { IoHomeOutline, IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import gambar from '../assets/img/goevent.png';

const Sidebar = () => {

  interface MenuItem {
    text: string;
    icon: JSX.Element;
    path: string;
  }

  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation(); // Hook to get the current path

  const handleToggle = () => {
    setOpen(!open);
  };

  // Define your menu items
  const menuItems: MenuItem[] = [
    { text: 'Dashboard', icon: <IoHomeOutline size={17} />, path: '/dashboard' },
    { text: 'Organizer', icon: <VscOrganization size={17} />, path: '/organizer' },
    { text: 'User', icon: <FaRegUser size={17} />, path: '/user' },
    { text: 'Setting', icon: <IoSettingsSharp size={17} />, path: '/setting' }
  ];

  return (
    <div className='flex h-screen'>
      <div className={`bg-slate-100 text-black transition-all duration-300 shadow-2xl ${open ? 'w-64' : 'w-20'} h-full flex flex-col`}>
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
                <span className={`transition-all ml-4 duration-300 ${open ? 'opacity-100 w-auto' : 'opacity-0 w-0'} overflow-hidden`}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className='flex-grow overflow-auto'>
        Your content or <Outlet /> for nested routes
      </div> */}
    </div>
  );
}

export default Sidebar;
