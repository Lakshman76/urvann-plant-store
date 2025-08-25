const categories = ["All", "Indoor", "Outdoor", "Succulent", "Air Purifying", "Home Decor"];

const CategoryFilter = ({ onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value === "All" ? "" : e.target.value)}
      className="border p-2 rounded"
    >
      {categories.map((ctgry) => (
        <option key={ctgry} value={ctgry}>
          {ctgry}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
