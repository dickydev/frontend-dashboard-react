import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      navigate("/hr");
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-linear-to-br from-blue-50 to-white">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            E
          </div>
          <h1 className="text-2xl font-semibold">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Sign in to your ERP dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block mb-3">
            <span className="text-gray-700 text-sm">Email Address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 text-sm">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
