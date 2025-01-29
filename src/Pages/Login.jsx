import React from 'react'
import ReUseHero from '../components/ReUseHero.jsx'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section>
      <ReUseHero heading= 'Login Page'/>
      
     <div className="bg-green-400">
        
      <div className="container mx-auto">
        <div className="">
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Login Now
        </h2>
        <form className='' >
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              
              required
            />
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
             <h3 className="text-blue-500 hover:underline">
              Sign up
            </h3>
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
    </div>
    </section>
  )
}

export default Login