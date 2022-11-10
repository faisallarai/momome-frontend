import React from 'react';
import { Bank } from '../../typings';

function BankLine({ name, code, country, currency }: Bank) {
  return (
    <div className="flex justify-between bg-gray-800 p-4 rounded-xl bg-gradient-to-br hover:cursor-pointer hover:scale-105 transition transform duration-100 ease-in-out">
      <div className="flex flex-col justify-items-center">
        <p className="text-white text-base">{name}</p>
        <span className="text-gray-500 text-xs">{code}</span>
      </div>

      <div className="flex flex-col justify-items-center">
        <p className="text-white text-base">{country}</p>
        <span className="text-gray-500 text-xs">{currency}</span>
      </div>
    </div>
  );
}

export default BankLine;
