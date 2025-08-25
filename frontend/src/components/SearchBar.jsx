import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search plants..."
        className="border p-2 rounded flex-1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Search</button>
    </form>
  );
};

export default SearchBar;
