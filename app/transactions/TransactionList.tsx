import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { Transaction } from '../../typings';
import TransactionLine from './TransactionLine';

async function getTransactions() {
  const res = await fetch('http://localhost:8000/transactions/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN,
    },
    next: { revalidate: 60 },
  });

  return res;
}

async function TransactionList() {
  const results = await getTransactions();
  if (results.status === 200) {
    const data: Transaction[] = await results.json();

    return (
      <section className="flex flex-col space-y-3 p-8 mt-2">
        <header className="flex justify-between">
          <h1 className="text-white font-bold text-xl">Transactions</h1>
          <CiSearch className="text-white text-xl" />
        </header>
        <main className="flex flex-col space-y-3 overflow-y-scroll scrollbar-hide h-[450px]">
          {data &&
            data.map((transaction) => (
              <TransactionLine key={transaction.id} {...transaction} />
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

export default TransactionList;
