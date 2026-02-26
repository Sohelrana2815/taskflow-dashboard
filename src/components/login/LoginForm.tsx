import React, { useState } from "react";
import api from "../../lib/axios";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const res = await api.post("/login", { email, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      alert("Invalid credentials!");
      console.log(err);
    }
  };

  return (
   <div className="">
     <form onSubmit={handleLogin} className="space-y-5">
      {/* Email Field */}
      <div className="flex flex-col">
        <label className="mb-2 text-sm font-medium text-gray-600">
          Email address
        </label>
        <input
          type="email"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col">
        <label className="mb-2 text-sm font-medium text-gray-600">
          Password
        </label>
        <input
          type="password"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 active:scale-95 transition duration-200 shadow-md"
      >
        Sign In
      </button>
    </form>
   </div>
  );
};

export default LoginForm;
