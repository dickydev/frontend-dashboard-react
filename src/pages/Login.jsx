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
      navigate("/dashboard/hr");
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 h-12 w-12 sm:h-14 sm:w-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            E
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Sign in to your ERP dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700 text-sm sm:text-base">
              Email Address
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 text-sm sm:text-base">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 sm:p-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} ERP System. All rights reserved.
        </p>
      </div>
    </div>
  );
}
