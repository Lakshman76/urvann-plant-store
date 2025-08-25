import { useEffect, useState } from "react";
import api from "../api/axios";
import PlantCard from "../components/PlantCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        setLoading(true);
        const res = await api.get("/plants", {
          params: { search, category },
        });
        setPlants(res.data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch plants");
      } finally {
        setLoading(false);
      }
    };
    fetchPlants();
  }, [search, category]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-4">
      <div className="flex flex-col justify-between md:flex-row gap-4 mb-4">
        <SearchBar onSearch={setSearch} />
        <div>
          Category: <CategoryFilter onSelect={setCategory} />
        </div>
      </div>

      {plants.length === 0 ? (
        <p>No plants found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PlantList;
