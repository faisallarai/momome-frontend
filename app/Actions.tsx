import React from 'react';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GiCash } from 'react-icons/gi';
import { CiCircleMore, CiMobile4 } from 'react-icons/ci';
import Link from 'next/link';

function Actions() {
  return (
    <section className="flex justify-evenly">
      <Link href="/transfers/send">
        <div className="bg-gray-800 rounded-full p-6  shadow-2xl hover:bg-gray-700 hover:cursor-pointer transition duration-150 ease-in group max-w-sm">
          <div className="flex flex-col justify-items-center">
            <FcMoneyTransfer className="text-gray-200 text-xl" />
            <p className="text-gray-300 text-base group-hover:text-lg group-hover:text-gray-200">
              send
            </p>
          </div>
        </div>
      </Link>
      <Link href="/transfers/bulk">
        <div className="bg-gray-800 rounded-full p-6 shadow-2xl hover:bg-gray-700 hover:cursor-pointer group max-w-sm">
          <div className="flex flex-col justify-items-center">
            <GiCash className="text-gray-200 text-xl" />
            <p className="text-gray-300 text-base group-hover:text-lg group-hover:text-gray-200">
              bulk
            </p>
          </div>
        </div>
      </Link>
      <Link href="/banks">
        <div className="bg-gray-800 rounded-full p-6 shadow-2xl hover:bg-gray-700 hover:cursor-pointer group max-w-sm">
          <div className="flex flex-col justify-items-center">
            <CiMobile4 className="text-gray-200 text-xl" />
            <p className="text-gray-300 text-base group-hover:text-lg group-hover:text-gray-200">
              banks
            </p>
          </div>
        </div>
      </Link>
      <Link href="/transfers">
        <div className="bg-gray-800 rounded-full p-6 shadow-2xl hover:bg-gray-700 hover:cursor-pointer group max-w-sm">
          <div className="flex flex-col justify-items-center">
            <CiCircleMore className="text-gray-200 text-xl" />
            <p className="text-gray-300 text-base group-hover:text-lg group-hover:text-gray-200">
              more
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Actions;
