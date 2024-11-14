const Search = () => {
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-full px-4 py-2 w-2/3 md:w-1/2 lg:w-1/3 bg-white"
        />
        <button className="bg-custom-secondary text-white rounded-full px-6 py-2 ml-2">
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
