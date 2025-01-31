import React, { useState } from 'react';
import ReUseHero from '../components/ReUseHero.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Clear previous errors when typing
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Clear previous errors when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh

    // Reset messages
    setLoginError("");
    setSuccessMessage("");

    // Validation
    if (!email.includes("@")) {
      setEmailError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    // Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      
      localStorage.setItem('token', JSON.stringify(userCredential.user.accessToken))
      
        setSuccessMessage("Login successful!");
        navigate('/')
      })
      .catch((error) => {
        setLoginError("Login failed! " + error.message);
      });
  };

  return (
    <section>
      <ReUseHero heading="Login Page" />

      <div className="bg-green-400">
        <div className="container mx-auto">
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Login Now
              </h2>

              {successMessage && (
                <p className="text-green-600 text-center mb-4">{successMessage}</p>
              )}
              {loginError && (
                <p className="text-red-600 text-center mb-4">{loginError}</p>
              )}

              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmail}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your email"
                    required
                  />
                  {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                </div>

                {/* Password Input */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePassword}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                    required
                  />
                  {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              </form>

              {/* Additional Links */}
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register">
                    <span className="text-blue-500 hover:underline">Sign up</span>
                  </Link>
                </p>
                <p className="text-gray-600">
                  <a href="#" className="text-blue-500 hover:underline">
                    Forgot password?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;