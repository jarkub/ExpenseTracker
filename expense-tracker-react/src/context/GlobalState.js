import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [],
  // transactions: [
  //   { id: Math.floor(Math.random() * 100000000), text: 'Flower', amount: -20 },
  //   { id: Math.floor(Math.random() * 100000000), text: 'Salary', amount: 300 },
  //   { id: Math.floor(Math.random() * 100000000), text: 'Book', amount: -10 },
  //   { id: Math.floor(Math.random() * 100000000), text: 'Camera', amount: 150 },
  // ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions (calls to reducer)
  function deleteTransaction(id) {
    console.log('');
    console.log('***GlobalState.deleteTransaction***');
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    console.log('');
    console.log('***GlobalState.addTransaction***');
    //console.log('transaction.id = ' + transaction.id);
    //console.log('transaction.text = ' + transaction.text);
    //console.log('transaction.amount = ' + transaction.amount);
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
