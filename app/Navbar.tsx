import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between">
      <div className="flex flex-col space-y-2">
        <h1 className="text-white font-bold leading-5 text-lg">
          Hi, Test Client
        </h1>
        <p className="text-sm text-gray-500 leading-5">Welcome back</p>
      </div>
      <div>
        <Link href="/">
          <p className="bg-gray-800 rounded-full px-4 py-2 text-white font-thin hover:bg-gray-700 cursor-pointer">
            MoMoMe
            <span className="font-extrabold text-red-600 transfor">.</span>
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
