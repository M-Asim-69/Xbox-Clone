import { Login } from '@/ServerActions/Login';
import React from 'react';
import Image from 'next/image';

function page() {
  console.log(process.env,URL);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-700 to-gray-900 text-white">
      <div className="text-center mb-8">
        <Image
          src="/xbox.png"
          alt="Xbox Logo"
          width={96} // Adjusted for explicit dimensions
          height={96}
          priority
          className="w-24 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">Welcome Back to Xbox</h1>
      </div>
      <form
        action={Login}
        className="bg-black bg-opacity-45 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            User Name
          </label>
          <input
            type="name"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-green-600 hover:bg-green-700 rounded text-white font-bold text-lg transition duration-300"
        >
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center">
        <a href="/forgot-password" className="text-green-400 hover:underline">
          Forgot Password?
        </a>
        <span className="mx-2 text-gray-400">|</span>
        <a href="/CreateAccount" className="text-green-400 hover:underline">
          Create an Account
        </a>
      </div>
    </div>
  );
}

export default page;
