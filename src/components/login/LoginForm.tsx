import React, { useState } from "react";
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Eye, Lock, Mail } from "lucide-react";

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
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-gray-500">Sign in to your account to continue</p>
      </div>

      <form className="space-y-5" onSubmit={handleLogin}>
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email address
          </label>
          <div className="relative group">
            {/* আইকন পজিশনিং: একদম বামে এবং মাঝখানে */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail
                size={18}
                className="text-gray-400 group-focus-within:text-green-800 transition-colors"
              />
            </div>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-3 outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all placeholder:text-gray-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock
                size={18}
                className="text-gray-400 group-focus-within:text-green-800 transition-colors"
              />
            </div>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-10 outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all placeholder:text-gray-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* পাসওয়ার্ড হাইড/শো আইকন (ডান পাশে) */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
              <Eye size={18} className="text-gray-400 hover:text-gray-600" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#12372A] text-white font-bold py-3 rounded-lg hover:bg-opacity-95 transition-all shadow-sm cursor-pointer"
        >
          Sign In
        </button>
      </form>

      {/* সোশ্যাল লগইন অংশ */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400 mb-4 uppercase">or continue with</p>
        <div className="flex gap-4">
          <button className="flex-1 border p-2 rounded-lg flex justify-center items-center gap-2">
            <BsGoogle size={20} /> Google
          </button>
          <button className="flex-1 border p-2 rounded-lg flex justify-center items-center gap-2">
            <BsGithub size={20} /> GitHub
          </button>
        </div>
        <p className="mt-6 text-sm">
          Don't have an account?{" "}
          <span className="text-green-800 font-bold cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
