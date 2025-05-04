"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("access_token="))
      ?.split("=")[1];
    setToken(accessToken || null);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <header className="fixed w-full z-50 mt-4">
        <div className="container mx-auto flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-md text-white rounded-xl shadow-2xl max-w-4xl">
          <div className="text-2xl font-bold flex items-center">
            <Link href="/">
              <img src="/xbox.png" alt="done" className="w-10" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`hover:text-green-500 ${
                pathname === "/" ? "text-green-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/Games"
              className={`hover:text-green-500 ${
                pathname === "/Games" ? "text-green-500" : ""
              }`}
            >
              Games
            </Link>
            <Link
              href={token ? "/Add" : "/News"}
              className={`hover:text-green-500 ${
                pathname === (token ? "/Add" : "/News") ? "text-green-500" : ""
              }`}
            >
              {token ? "Add" : "News"}
            </Link>
            <Link
              href={token ? `/Todo/1` : "/Videos"}
              className={`hover:text-green-500 ${
                pathname?.startsWith(token ? "/Todo" : "/Videos")
                  ? "text-green-500"
                  : ""
              }`}
            >
              {token ? "Todo" : "Videos"}
            </Link>
            {token ? (
              <button
                onClick={() => {
                  document.cookie =
                    "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                  setToken(null);
                  window.location.href = "/";
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/LogIN"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium shadow-lg transition-all duration-200"
              >
                Log in
              </Link>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="z-50 relative focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col w-8 h-6 justify-between transition-transform duration-500">
                <span
                  className={`h-0.5 w-full bg-white rounded-full transform transition-all duration-500 ${
                    isOpen ? "rotate-45 translate-y-1.5 bg-green-400" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white rounded-full transition-all duration-500 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-white rounded-full transform transition-all duration-500 ${
                    isOpen ? "-rotate-45 -translate-y-1.5 bg-green-400" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Mobile Menu */}
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black text-white transition-all duration-500 ${
          isOpen
            ? "z-[9999] opacity-95 pointer-events-auto"
            : "opacity-0 -z-10 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        {isOpen && (
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white bg-gray-800 hover:bg-red-500 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 z-50"
          >
            ✖ Close
          </button>
        )}

        <nav className="flex flex-col items-center justify-center space-y-8 text-4xl font-bold">
          <Link
            href="/"
            onClick={toggleMenu}
            className={`${
              pathname === "/" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Home
          </Link>
          <Link
            href="/Games"
            onClick={toggleMenu}
            className={`${
              pathname === "/Games" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Games
          </Link>
          <Link
            href={token ? "/Add" : "/News"}
            onClick={toggleMenu}
            className={`${
              pathname === (token ? "/Add" : "/News")
                ? "text-green-400"
                : "text-white"
            } hover:text-green-400`}
          >
            {token ? "Add" : "News"}
          </Link>
          <Link
            href={token ? `/Todo/1` : "/Videos"}
            onClick={toggleMenu}
            className={`${
              pathname?.startsWith(token ? "/Todo" : "/Videos")
                ? "text-green-400"
                : "text-white"
            } hover:text-green-400`}
          >
            {token ? "Todo" : "Videos"}
          </Link>
          {token ? (
            <button
              onClick={() => {
                document.cookie =
                  "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                setToken(null);
                toggleMenu();
                window.location.href = "/";
              }}
              className="mt-10 bg-red-500 hover:bg-red-600 px-10 py-4 rounded-full text-2xl"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/LogIN"
              onClick={toggleMenu}
              className="mt-10 bg-green-500 hover:bg-green-600 px-10 py-4 rounded-full text-2xl"
            >
              Log in
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}
