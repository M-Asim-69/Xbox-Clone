import { Updated } from "@/ServerActions/Updating";
import Image from "next/image";

export default async function page({ params, searchParams }) {
  let id = params.num;
  let { title, description } = searchParams;

  return (
    <div className="relative min-h-screen bg-black flex justify-center items-center">
      <div className="absolute inset-0">
        <Image
          src="/New.jpg"
          alt="Xbox background"
          layout="fill"
          objectFit="fix"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      {/* Form Container */}
      <div className="relative z-10 w-full max-w-lg p-8 rounded-xl bg-trasnperant bg-opacity-20 shadow-lg border-2 border-green-800">
        <h2 className="text-3xl text-center font-bold text-green-500 mb-6">
          Create a New Item
        </h2>
        <form action={Updated} className="space-y-6">
          <input type="hidden" name="id" id="id" value={id} />
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-white text-lg mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={title}
              className="w-full p-3 text-white rounded-lg bg-transparent  border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter the title"
              required
            />
          </div>
          {/* Description Input */}
          <div>
            <label
              htmlFor="description"
              className="block text-white text-lg mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              className="w-full p-3 text-white rounded-lg bg-transparent bg-opacity-20 border-2 border-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter a description"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
