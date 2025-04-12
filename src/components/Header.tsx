import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full absolute z-10">
      <div className="flex mx-10 items-center justify-between py-5">
        <Link to="/" className="text-lg hover:text-gray-500 transition">
          Chaewon Yu
        </Link>
        <nav className="flex gap-6">
          <Link to="/works" className="hover:text-gray-500 transition">
            Current Works
          </Link>
          <Link to="/about" className="hover:text-gray-500 transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
