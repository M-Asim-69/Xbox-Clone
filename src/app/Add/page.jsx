import { AddTodo } from "@/ServerActions/AddTodo";
import React from "react";

function page() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Form container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Border container with increased width */}
        <div className="bg-transparent border-4 border-green-700 p-8 rounded-lg shadow-lg w-3/4 max-w-lg">
          <h2 className="text-2xl font-semibold mt-20 text-center text-white mb-6">
            Xbox Theme Form
          </h2>

          <form action={AddTodo} className="space-y-4 mb-16">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-lightGray"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full p-3 mt-2 border-2 bg-transparent border-gray-400  text-lightGray rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter the title..."
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-lg font-medium text-lightGray"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full p-3 mt-2 border-2 border-gray-400 bg-transparent text-lightGray rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter the description..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
