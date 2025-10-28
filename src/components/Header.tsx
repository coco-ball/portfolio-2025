import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full absolute z-10">
      <div className="flex mx-10 items-center justify-between py-5">
        <Link
          to="/"
          className="text-lg hover:text-gray-500 hover:scale-105 hover:cursor-pointer transition-all duration-500"
        >
          Chaewon Yu
        </Link>
        <nav className="flex gap-6">
          <Link
            to="/works"
            className="hover:text-gray-500 hover:scale-105 hover:cursor-pointer transition-all duration-500"
          >
            Current Works
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-500 hover:scale-105 hover:cursor-pointer transition-all duration-500"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
