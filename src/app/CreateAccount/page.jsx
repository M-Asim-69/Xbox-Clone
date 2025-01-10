import { createAccount } from '@/ServerActions/CreateAccount';
import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-700 to-gray-900 text-white">
        <div className="text-center mb-8">
          <Image
            src="/xbox.png"
            alt="Xbox Logo"
            width={96} // 24 * 4 (tailwind w-24 equivalent)
            height={96}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="text-2xl font-bold">Create Your Xbox Account</h1>
        </div>
        <form
          action={createAccount}
          className="bg-black bg-opacity-45 p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Choose a username"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Create a password"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded text-white font-bold text-lg transition duration-300"
          >
            Create Account
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/LogIN" className="text-green-400 hover:underline">
            Already have an account? Sign In
          </a>
        </div>
      </main>
    </>
  );
}

export default Page;
