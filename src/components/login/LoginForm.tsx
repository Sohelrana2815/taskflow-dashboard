import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h2>Welcome back</h2>
      <p>Sign in to your account to continue</p>

      {/* HTML Form Element */}
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div>
          <label>Email address</label>
          <input
            type="email"
            className="border rounded-md border-green-700"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div>
          <label>Password</label>
          <input
            type="password"
            className="border rounded-md border-green-700"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="border rounded-lg px-4 py-2">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
