import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Bank } from '../../typings';
import BankLine from './BankLine';

type bankResult = {
  status: boolean;
  message: string;
  data: Bank[];
};

const getBanks = async () => {
  const res = await fetch('http://localhost:8000/banks/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN,
    },
    cache: 'force-cache',
  });

  return res;
};

async function BankList() {
  const results = await getBanks();
  if (results.status === 200) {
    const banks: bankResult = await results.json();
    console.log('first');
    return (
      <section className="flex flex-col space-y-3 p-8 mt-2">
        <header className="flex justify-between">
          <h1 className="text-white font-bold text-xl">Banks</h1>
          <CiSearch className="text-white text-xl" />
        </header>
        <main className="flex flex-col space-y-3 overflow-y-scroll scrollbar-hide h-screen">
          {banks.data.map((bank) => (
            <BankLine key={bank.id} {...bank} />
          ))}
        </main>
      </section>
    );
  } else if (results.status === 403) {
    return (
      <p className="font-extrabold text-white text-center text-3xl">
        No Data, You are offline
      </p>
    );
  } else if (results.status === 401) {
    return (
      <p className="font-extrabold text-white text-center text-3xl">
        No Data, Token expired
      </p>
    );
  } else {
    return (
      <p className="font-extrabold text-white text-center text-3xl">
        No Data, Contact your Systems Administrator
      </p>
    );
  }
}

export default BankList;
