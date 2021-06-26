import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 75,
    category: 'House',
    type: 'Expense',
    date: '2021-06-29',
    id: 'd5b53cbf-4346-43f0-ab52-a3b883ca569d',
  },
  {
    amount: 55,
    category: 'Travel',
    type: 'Expense',
    date: '2021-06-28',
    id: '87cd86d6-1ef8-417a-9adb-91e602491bf4',
  },
  {
    amount: 50,
    category: 'Business',
    type: 'Income',
    date: '2021-06-29',
    id: '638ceea8-3206-45d7-a639-4b6646e58858',
  },
  {
    amount: 100,
    category: 'Salary',
    type: 'Income',
    date: '2021-06-28',
    id: '99adb76d-9ae7-4638-90ab-2fea5e434cb0',
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //actions creators
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };
  const balance = transactions.reduce((acc, item) => {
    return item.value === 'Expense' ? acc - item.amount : acc + item.amount;
  }, 0);

  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
