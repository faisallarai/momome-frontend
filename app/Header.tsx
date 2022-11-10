import React from 'react';
import Actions from './Actions';
import Navbar from './Navbar';
import Total from './Total';

function Header() {
  return (
    <header className="flex flex-col p-8 mt-1 space-y-2">
      <Navbar />
      {/* @ts-ignore */}
      <Total />
      <Actions />
    </header>
  );
}

export default Header;
