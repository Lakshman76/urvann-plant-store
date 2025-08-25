import { useState } from "react";
import api from "../api/axios";

const AddPlantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categories: "",
    available: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Plant name is required");
      return;
    }
    if (isNaN(formData.price) || Number(formData.price) <= 0) {
      setError("Price must be a positive number");
      return;
    }
    if (!formData.categories.trim()) {
      setError("At least one category is required");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const categoriesArray = formData.categories
        .split(",")
        .map((c) => c.trim())
        .filter((c) => c);

      await api.post("/plants", {
        name: formData.name,
        price: Number(formData.price),
        categories: categoriesArray,
        available: formData.available,
      });

      setSuccess("Plant added successfully!");
      setFormData({ name: "", price: "", categories: "", available: true });
    } catch (err) {
      console.log(err);
      setError("Failed to add plant");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Plant</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Plant Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter plant name"
          />
        </div>
        <div>
          <label className="block font-medium">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter price"
          />
        </div>
        <div>
          <label className="block font-medium">
            Categories (comma separated)
          </label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Indoor, Succulent, Air Purifying"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
          />
          <label>Available in stock</label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {loading ? "Adding..." : "Add Plant"}
        </button>
      </form>
    </div>
  );
};

export default AddPlantForm;
