import { FaSearch } from "react-icons/fa";
import React from 'react'
interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Masukkan Username"
        className="input w-full rounded-3xl bg-white border-gray-400 pl-5 pr-16"
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
