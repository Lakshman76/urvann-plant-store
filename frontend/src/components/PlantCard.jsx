const PlantCard = ({ plant }) => {
    return (
      <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
        <h2 className="text-lg font-semibold">{plant.name}</h2>
        <p className="text-green-600 font-bold">₹{plant.price}</p>
        <p className="text-sm text-gray-600 font-semibold">Categories: <span className="font-normal">{plant.categories.join(", ")}</span></p>
        <p
          className={`mt-2 text-sm font-medium ${
            plant.available ? "text-green-600" : "text-red-500"
          }`}
        >
          {plant.available ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    );
  };
  
  export default PlantCard;
  