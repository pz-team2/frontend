import { FaSearch } from "react-icons/fa";

export const Search = () => {
    return (
        <div>
            <input type="text" placeholder="Masukkan Username" className="input w-full rounded-3xl bg-white border-gray-400 pl-5 pr-16" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-blue-950 text-white p-2" style={{ borderRadius: '50%' }}>
                <FaSearch />
            </button>
        </div>
    )
}
