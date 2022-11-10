import React from 'react';
import _ from 'lodash';

async function getTotal() {
  const res = await fetch('http://localhost:8000/transactions/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TOKEN,
    },
    next: { revalidate: 60 },
  });

  const data = await res.json();
  // const data = [
  //   { n: 4, m: 5 },
  //   { n: 2, m: 5 },
  //   { n: 6, m: 5 },
  // ];

  const amounts = data.map((d: any) => parseInt(d.amount));

  const total = _.reduce(
    amounts,
    function (sum, n) {
      return sum + n;
    },
    0
  );
  const money = total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return money;
}

async function Total() {
  const total = await getTotal();
  return (
    <section className="bg-blue-900 p-3 rounded-3xl shadow-2xl hover:bg-blue-800 transition-transform cursor-pointer">
      <div className="flex justify-center space-x-1 hover:text-gray-500">
        <span className="text-white font-bold italic">GHS</span>
        <h1 className="text-white">{total}</h1>
      </div>
    </section>
  );
}

export default Total;
