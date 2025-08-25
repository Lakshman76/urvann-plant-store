import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginDetails.email || !loginDetails.password) {
      toast.error("All fields are required");
      return;
    }
    const res = await api.post("/auth/login", loginDetails);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    navigate("/plants");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={loginDetails.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginDetails.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
          >
            Sign up here
          </button>
        </p>
        <p className="text-sm text-gray-500">
          To become admin contact with <span className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer">lakshmankumar2603@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
