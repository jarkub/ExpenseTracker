import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log('');
  console.log('***TransactionList***');
  //transactions.map((t) => {
  //  console.log('t.id = ' + t.id);
  //  console.log('t.text = ' + t.text);
  //  console.log('t.amount = ' + t.amount);
  //});

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </>
  );
};
