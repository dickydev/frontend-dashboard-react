import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Forms/Button";
import Input from "../components/Forms/Input";

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
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="md"
            />
          </label>

          <label className="block">
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="md"
            />
          </label>

          <Button
            type="submit"
            label="Sign In"
            color="blue"
            fullWidth
            size="md"
          />
        </form>

        <p className="text-center text-xs sm:text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} ERP System. All rights reserved.
        </p>
      </div>
    </div>
  );
}
