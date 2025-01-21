import Link from "next/link";
import { cookies } from "next/headers";
import { LogOut } from "@/ServerActions/LogOut";

export default async function Footer() {
  const cookieStore = await cookies();
  const token =  cookieStore.get("access_token")?.value;
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Xbox Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Xbox</h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Experience the future of gaming with Xbox. Connect, explore, and
              immerse yourself in the ultimate gaming world.
            </p>
          </div>

          {/* Links: Explore & Resources */}
          <div className="grid grid-cols-2 gap-6">
            {/* Explore Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/Games">
                    <span className="hover:text-green-500 cursor-pointer text-gray-400 transition duration-300 ease-in-out transform hover:translate-x-1">
                      Games
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={token ? "/Add" : "/News"}>
                    <span className="hover:text-green-500 cursor-pointer text-gray-400 transition duration-300 ease-in-out transform hover:translate-x-1">
                      {token ? "Add" : "News"}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={token ? `/Todo/${1}` : "/support"}>
                    <span className="hover:text-green-500 cursor-pointer text-gray-400 transition duration-300 ease-in-out transform hover:translate-x-1">
                      {token ? "Todo" : "Support"}
                    </span>
                  </Link>
                </li>
                <li>
                  {token ? (
                    <form action={LogOut}>
                      <button type="submit">Logout</button>
                    </form>
                  ) : (
                    <Link href="/LogIN">Log in</Link>
                  )}
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about">
                    <span className="hover:text-green-500 cursor-pointer text-gray-400 transition duration-300 ease-in-out transform hover:translate-x-1">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <span className="hover:text-green-500 cursor-pointer text-gray-400 transition duration-300 ease-in-out transform hover:translate-x-1">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <span className="hover:text-green-500 cursor-pointer text-gray-400 transition duration-300 ease-in-out transform hover:translate-x-1">
                      Terms of Service
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <span className="hover:text-green-500 cursor-pointer text-gray-400 transition duration-300 ease-in-out transform hover:translate-x-1">
                      FAQ
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right mt-8">
          <div className="flex justify-center md:justify-end space-x-6 mt-4">
            <Link href="https://www.facebook.com/xbox">
              <span className="text-gray-400 hover:text-green-500 cursor-pointer transition duration-300">
                <i className="fab fa-facebook fa-lg"></i>
              </span>
            </Link>
            <Link href="https://twitter.com/xbox">
              <span className="text-gray-400 hover:text-green-500 cursor-pointer transition duration-300">
                <i className="fab fa-twitter fa-lg"></i>
              </span>
            </Link>
            <Link href="https://www.instagram.com/xbox">
              <span className="text-gray-400 hover:text-green-500 cursor-pointer transition duration-300">
                <i className="fab fa-instagram fa-lg"></i>
              </span>
            </Link>
            <Link href="https://www.youtube.com/xbox">
              <span className="text-gray-400 hover:text-green-500 cursor-pointer transition duration-300">
                <i className="fab fa-youtube fa-lg"></i>
              </span>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Xbox. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for gamers by gamers.</p>
        </div>
      </div>
    </footer>
  );
}
