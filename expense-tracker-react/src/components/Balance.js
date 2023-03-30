import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  console.log('');
  console.log('***Balance***');

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);
  //console.log('amounts = ' + amounts);
  //console.log('amounts.reduce((acc, item) => (acc += item), 0) = ' + amounts.reduce((acc, item) => (acc += item), 0));
  //console.log(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //console.log('');

  //console.log('total = ' + total);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
