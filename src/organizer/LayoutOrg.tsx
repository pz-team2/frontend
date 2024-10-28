import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { BiSolidUserRectangle } from "react-icons/bi";;
import { FaCalendarCheck } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";

export const LayoutOrg = () => {

    const Menu = [
        { text: 'Dashboard', icon: <AiFillHome size={20} />, path: '/organizer/dashboard' },
        { text: 'Event', icon: <FaCalendarCheck size={20} />, path: '/organizer/event' },
        { text: 'Profile', icon: <BiSolidUserRectangle size={20} />, path: '/organizer/event/profile' },
        // { text: 'Profile', icon: <BiSolidUserRectangle size={20} />, path: '/organizer/event/profile' },

    ]
    return (
        <div className="flex h-screen">
            <Sidebar menuItems={Menu} />
            <div className="flex-grow overflow-auto p-10 md:p-28 sm:p-10 lg:p-16 pb-40">
                <Outlet />
            </div>
        </div>
    )
}