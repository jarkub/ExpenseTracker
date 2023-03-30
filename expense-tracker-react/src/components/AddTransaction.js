import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState(''); // '' => string type
  const [amount, setAmount] = useState(''); // 0 => numeric type

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    console.log('');
    console.log('***AddTransaction***');

    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount // parseFloat(amount),
    };

    //console.log('newTransaction.id = ' + newTransaction.id);
    //console.log('newTransaction.text = ' + newTransaction.text);
    //console.log('newTransaction.amount = ' + newTransaction.amount);

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
