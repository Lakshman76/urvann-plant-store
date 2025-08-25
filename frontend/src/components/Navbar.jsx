import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for icons
import api from "../api/axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const onLogout = async () => {
    await api.post("/auth/logout");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav className="bg-green-600 text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          🌱 Plant Nursery
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/profile" className="hover:text-gray-200">Profile</Link>
          <p className="hover:text-gray-200" onClick={onLogout}>Logout</p>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 bg-green-700 p-4 rounded-lg">
          <Link to="/profile" className="block hover:text-gray-200" onClick={toggleMenu}>Profile</Link>
          <Link to="/logout" className="block hover:text-gray-200" onClick={toggleMenu}>Logout</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
