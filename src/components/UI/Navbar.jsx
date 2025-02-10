import Link from "next/link";
import { cookies } from "next/headers";
import { LogOut } from "@/ServerActions/LogOut";

export default async function Navbar() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  return (
    <>
      <header className="fixed w-full z-50 mt-4">
        <div className="container mx-auto flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-md text-white rounded-xl shadow-2xl max-w-4xl">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center">
            <Link href="/">
              <img src="/xbox.png" alt="done" className="w-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-green-500">
              Home
            </Link>
            <Link href="/Games" className="hover:text-green-500">
              Games
            </Link>
            <Link href={token ? "/Add" : "/News"} className="hover:text-green-500">
              {token ? "Add" : "News"}
            </Link>
            <Link
              href={token ? `/Todo/${1}` : "/Videos"}
              className="hover:text-green-500"
            >
              {token ? "Todo" : "Videos"}
            </Link>
            {token ? (
              <form action={LogOut}>
                <button
                  type="submit"
                  className="block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-red-500/20"
                >
                  Logout
                </button>
              </form>
            ) : (
              <Link
                href="/LogIN"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/20"
              >
                Log in
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="relative md:hidden">
            <button
              id="menuToggleButton"
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <nav
              id="mobileMenu"
              className="absolute right-0 top-10 hidden flex-col bg-gray-900 bg-opacity-90 text-white rounded-xl shadow-lg py-4 px-6 w-48"
            >
              <Link href="/" className="block hover:text-green-500 py-2">
                Home
              </Link>
              <Link href="/Games" className="block hover:text-green-500 py-2">
                Games
              </Link>
              <Link
                href={token ? "/Add" : "/News"}
                className="block hover:text-green-500 py-2"
              >
                {token ? "Add" : "News"}
              </Link>
              <Link
                href={token ? "/Todo" : "/Support"}
                className="block hover:text-green-500 py-2"
              >
                {token ? "Todo" : "Support"}
              </Link>
              {token ? (
                <form action={LogOut}>
                  <button
                    type="submit"
                    className="block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-red-500/20"
                  >
                    Logout
                  </button>
                </form>
              ) : (
                <Link
                  href="/LogIN"
                  className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/20"
                >
                  Log in
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Inline Script for Mobile Menu Toggle */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const menuToggleButton = document.getElementById('menuToggleButton');
              const mobileMenu = document.getElementById('mobileMenu');
              const links = mobileMenu.querySelectorAll('a');

              menuToggleButton.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
              });

              links.forEach(link => {
                link.addEventListener('click', function () {
                  mobileMenu.classList.add('hidden');
                });
              });
            })();
          `,
        }}
      />
    </>
  );
}
