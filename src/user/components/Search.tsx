import React, { useState } from "react";

interface SearchProps {
  onSearch: (query: string, category: string) => void; // Callback untuk mengirim query pencarian dan kategori
  categories: { _id: string; name: string }[]; // Daftar kategori yang tersedia
}

const Search: React.FC<SearchProps> = ({ onSearch, categories }) => {
  const [query, setQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value, selectedCategory); // Kirimkan query pencarian dan kategori
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedCategory(value);
    onSearch(query, value); // Kirimkan query pencarian dan kategori yang dipilih
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center my-10 space-y-4 px-4 md:px-0 sm:space-y-0 sm:space-x-4">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-full px-4 py-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white"
        value={query}
        onChange={handleInputChange} // Handle perubahan input
      />
      
      <select
        className="border rounded-full px-4 py-2 w-full sm:w-1/3 bg-white"
        value={selectedCategory}
        onChange={handleCategoryChange} // Handle perubahan kategori
      >
        <option value="">Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <button
        onClick={() => onSearch(query, selectedCategory)} // Memperbarui pencarian saat tombol diklik
        className="bg-custom-secondary text-white rounded-full px-6 py-2 w-full sm:w-auto"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
