import React, { useState } from "react";
import api from "../../lib/axios";
import { useNavigate } from "react-router";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { toast } from "sonner";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/login", { email, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        toast.success("Welcome back!", {
          description: "Login successful. Redirecting to dashboard...",
        });
        setTimeout(() => navigate("/dashboard"), 1000);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error("Authentication Failed", {
        description:
          err.response?.data?.message || "Invalid email or password.",
      });
      console.log(err);
    } finally {
      setLoading(false);
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
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-10 outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all placeholder:text-gray-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* পাসওয়ার্ড হাইড/শো আইকন (ডান পাশে) */}
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff
                  size={18}
                  className="text-[#1B4332] transition-colors"
                />
              ) : (
                <Eye
                  size={18}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                />
              )}
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-full bg-linear-to-b from-[#2D6A4F] to-[#1B4332] text-white font-bold py-3.5 rounded-xl 
             transition-all duration-300 shadow-md hover:shadow-lg
             active:scale-[0.98] cursor-pointer"
        >
          {loading ? `Signin in...` : "Sign In"}
        </button>
      </form>

      {/* সোশ্যাল লগইন অংশ */}
      <div className="mt-8 text-center">
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
            or continue with
          </span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        <div className="flex gap-4">
          <button
            className="flex-1 border border-gray-200 p-3 rounded-xl flex justify-center items-center gap-2 
                       hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 cursor-pointer"
          >
            <BsGoogle size={18} /> Google
          </button>
          <button
            className="flex-1 border border-gray-200 p-3 rounded-xl flex justify-center items-center gap-2 
                       hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 cursor-pointer"
          >
            <BsGithub size={18} /> GitHub
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Don't have an account?{" "}
          <button className="text-[#1B4332] font-bold hover:underline cursor-pointer ml-1">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
