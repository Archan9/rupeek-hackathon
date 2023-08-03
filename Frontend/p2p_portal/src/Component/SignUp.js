// Signup.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = () => {
    console.log(name, email, password);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">SignUp</h2>
        <form>
        <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="name"
              value={name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="button" onClick={handleSignup} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none">
                SignUp
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-600 text-sm">Already have an account? <Link className="text-blue-500 hover:text-blue-600" to="/">Login</Link></p>
      </div>
    </div>
  );
}