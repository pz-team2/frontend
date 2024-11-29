import { FaSearch } from "react-icons/fa";
import { useState } from "react";

interface SearchProps {
  onSearch: (term: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm); // Panggil fungsi pencarian dari parent
    
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Masukkan Username"
        className="input w-full rounded-3xl bg-white border-gray-400 pl-5 pr-16"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-blue-950 text-white p-2"
        style={{ borderRadius: "50%" }}
      >
        <FaSearch />
      </button>
    </form>
  );
};
