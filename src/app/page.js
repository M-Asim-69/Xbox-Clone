import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="relative h-screen">
          {/* Background Image */}
          <Image
            src="/7.jpg"
            alt="Hero Background"
            layout="fill" // Covers the entire section
            objectFit="cover" // Ensures the image covers the area proportionally
            priority // Preloads the image for better performance
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Xbox</h1>
            <p className="text-lg md:text-xl mb-6">
              Explore the best games and immerse yourself in the ultimate gaming experience.
            </p>
            <Link href="/Games">
              <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-300">
                Explore Games
              </button>
            </Link>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/1.jpg", title: "Game Title 1", desc: "A thrilling adventure with stunning visuals and gameplay." },
              { src: "/2.jpg", title: "Game Title 2", desc: "A thrilling adventure with stunning visuals and gameplay." },
              { src: "/3.jpg", title: "Game Title 3", desc: "A thrilling adventure with stunning visuals and gameplay." },
              { src: "/4.jpg", title: "Game Title 4", desc: "A thrilling adventure with stunning visuals and gameplay." },
              { src: "/5.jpg", title: "Game Title 5", desc: "Experience a groundbreaking story and immersive action." },
              { src: "/6.jpg", title: "Game Title 6", desc: "Dive into an open-world masterpiece filled with excitement." },
            ].map((game, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={game.src}
                  alt={game.title}
                  width={400}
                  height={224}
                  priority
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{game.title}</h3>
                  <p className="text-sm mt-2 text-gray-400">{game.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest News Section */}
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-3xl md:text-4xl text-green-600 font-bold text-center mb-8">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-green-600 font-semibold">
                Xbox Series X: New Update
              </h3>
              <p className="mt-2 text-gray-600">
                Discover the latest features in the newest Xbox Series X update, designed to enhance your gaming experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-green-600 font-semibold">
                Game Pass Additions
              </h3>
              <p className="mt-2 text-gray-600">
                Check out the exciting new games added to Xbox Game Pass this month!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
