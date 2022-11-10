import React from 'react';
import TransactionList from './transactions/TransactionList';

function Home() {
  return (
    <main>
      {/* @ts-ignore */}
      <TransactionList />
    </main>
  );
}

export default Home;
