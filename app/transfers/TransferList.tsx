import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Transfer } from '../../typings';
import TransferLine from './TransferLine';

const getTransfers = async () => {
  const res = await fetch('http://localhost:8000/payments/transfer/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN,
    },
    next: { revalidate: 60 * 60 },
  });
  return res;
};

async function TransferList() {
  const results = await getTransfers();
  if (results.status === 200) {
    const data: Transfer[] = await results.json();
    return (
      <section className="flex flex-col space-y-3 p-8 mt-2">
        <header className="flex justify-between">
          <h1 className="text-white font-bold text-xl">Transfers</h1>
          <CiSearch className="text-white text-xl" />
        </header>
        <main className="flex flex-col space-y-3 overflow-y-scroll scrollbar-hide h-[450px]">
          {data.map((transaction) => (
            <TransferLine key={transaction.id} {...transaction} />
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

export default TransferList;
