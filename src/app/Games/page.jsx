import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="py-12 bg-gradient-to-r from-green-800 via-green-500 to-teal-500 text-center">
        <h1 className="text-4xl mt-28 font-bold tracking-wide text-white">
          Xbox Games
        </h1>
        <p className="text-lg mt-4 text-white opacity-90">
          Explore the best games for Xbox. Immerse yourself in unforgettable
          adventures, action, and stories.
        </p>
      </header>

      {/* Featured Games Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Featured Games
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Game 1 */}
            <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <Image
                src="/forza5.jpg"
                alt="Forza Horizon 5"
                width={400}
                height={320}
                priority
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold">Forza Horizon 5</h3>
                <p className="text-lg mt-2">
                  Large Map with Simulator Racing Experience.
                </p>
      
              </div>
            </div>

            {/* Game 2 */}
            <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <Image
                src="/halo.jpg"
                alt="Halo"
                width={400}
                height={320}
                priority
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold">Halo</h3>
                <p className="text-lg mt-2">
                  A thrilling multiplayer experience like no other.
                </p>

              </div>
            </div>

            {/* Game 3 */}
            <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <Image
                src="/hell.png"
                alt="Hellblade: Senua Saga"
                width={400}
                height={320}
                priority
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold">Hellblade: Senua Saga</h3>
                <p className="text-lg mt-2">
                  Horror Game Experience with Good Story.
                </p>
  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Games Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-green-500 mb-8">
            Trending Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/fn.jpeg", title: "Fortnite", id: 4 },
              { src: "/pug.jpg", title: "PUBG", id: 5 },
              { src: "/apex.jpg", title: "Apex Legends", id: 6 },
              { src: "/mine.png", title: "Minecraft", id: 7 },
            ].map((game, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <Image
                  src={game.src}
                  alt={game.title}
                  width={300}
                  height={192}
                  priority
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{game.title}</h3>
 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Xbox Games. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
