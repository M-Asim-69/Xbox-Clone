import Image from 'next/image';

export default function page() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <h2 className="text-3xl mt-24 md:text-4xl font-bold text-center text-green-500 mb-12 tracking-wider">
        Latest News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* News Item 1 */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition duration-500 ease-in-out transform hover:shadow-2xl">
          <Image
            src="/8.jpg"
            alt="News 1"
            width={500}
            height={224}
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
            priority
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-500 mb-3 group-hover:text-green-400 transition duration-300">
              Xbox Series X: New Update
            </h3>
            <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition duration-300">
              Discover the latest features in the newest Xbox Series X update, designed to enhance your gaming experience.
            </p>
            <span className="text-green-500 font-semibold group-hover:text-green-400 cursor-pointer transition duration-300 transform group-hover:translate-x-2">
              Read More
            </span>
          </div>
        </div>

        {/* News Item 2 */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition duration-500 ease-in-out transform hover:shadow-2xl">
          <Image
            src="/1.jpg"
            alt="News 2"
            width={500}
            height={224}
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-500 mb-3 group-hover:text-green-400 transition duration-300">
              New Games Added to Game Pass
            </h3>
            <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition duration-300">
              Check out the exciting new games added to Xbox Game Pass this month! From RPGs to action-packed adventures.
            </p>
            <span className="text-green-500 font-semibold group-hover:text-green-400 cursor-pointer transition duration-300 transform group-hover:translate-x-2">
              Read More
            </span>
          </div>
        </div>

        {/* News Item 3 */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition duration-500 ease-in-out transform hover:shadow-2xl">
          <Image
            src="/3.jpg"
            alt="News 3"
            width={500}
            height={224}
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-500 mb-3 group-hover:text-green-400 transition duration-300">
              Xbox Cloud Gaming: A Game Changer
            </h3>
            <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition duration-300">
              Xbox Cloud Gaming allows you to play your favorite games on any device, anywhere, at any time.
            </p>
            <span className="text-green-500 font-semibold group-hover:text-green-400 cursor-pointer transition duration-300 transform group-hover:translate-x-2">
              Read More
            </span>
          </div>
        </div>

        {/* News Item 4 */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition duration-500 ease-in-out transform hover:shadow-2xl">
          <Image
            src="/4.jpg"
            alt="News 4"
            width={500}
            height={224}
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-500 mb-3 group-hover:text-green-400 transition duration-300">
              Xbox Game Studios Reveals New Titles
            </h3>
            <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition duration-300">
              Xbox Game Studios reveals exciting new titles for next-gen consoles. Here's what you can expect in 2024.
            </p>
            <span className="text-green-500 font-semibold group-hover:text-green-400 cursor-pointer transition duration-300 transform group-hover:translate-x-2">
              Read More
            </span>
          </div>
        </div>

        {/* News Item 5 */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition duration-500 ease-in-out transform hover:shadow-2xl">
          <Image
            src="/5.jpg"
            alt="News 5"
            width={500}
            height={224}
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-500 mb-3 group-hover:text-green-400 transition duration-300">
              The Evolution of Xbox Live
            </h3>
            <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition duration-300">
              Explore the history and future of Xbox Live, from its early days to the evolution of online gaming.
            </p>
            <span className="text-green-500 font-semibold group-hover:text-green-400 cursor-pointer transition duration-300 transform group-hover:translate-x-2">
              Read More
            </span>
          </div>
        </div>

        {/* News Item 6 */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:scale-105 transition duration-500 ease-in-out transform hover:shadow-2xl">
          <Image
            src="/6.jpg"
            alt="News 6"
            width={500}
            height={224}
            className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-500 mb-3 group-hover:text-green-400 transition duration-300">
              Xbox and EA: A New Partnership
            </h3>
            <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition duration-300">
              Xbox announces a strategic partnership with EA to bring exciting new sports games to the platform.
            </p>
            <span className="text-green-500 font-semibold group-hover:text-green-400 cursor-pointer transition duration-300 transform group-hover:translate-x-2">
              Read More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
