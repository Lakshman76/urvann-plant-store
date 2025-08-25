import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupDetails, setSignupDetails] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
        !signupDetails.name ||
        !signupDetails.email ||
        !signupDetails.password
      ) {
        toast.error("All fields are required");
        return;
      }
      toast.promise(api.post("/auth/signup", signupDetails), {
        loading: "Signing up...",
        success: (data) => {
          navigate("/login");
          return data.data;
        },
        error: (err) => {
          return err.response.data;
        },
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={signupDetails.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={signupDetails.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signupDetails.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700"
          >
            Signup
          </button>
        </form>
        <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
            >
              Login here
            </button>
          </p>
      </div>
    </div>
  );
};

export default Signup;
