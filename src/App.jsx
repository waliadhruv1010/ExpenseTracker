import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount
    };

    setExpenses([...expenses, newExpense]);
    setInput('');
    setAmount('');
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="app-container">
      <div className="expense-tracker">
        <h2>Expense Tracker</h2>
        <div className="input-container">
          <input
            type="text"
            value={input}
            placeholder="Expense"
            onChange={(e) => setInput(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            value={amount}
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
          />
          <button onClick={addExpense} className="add-button">
            Add Expense
          </button>
        </div>
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <span className="expense-title">{expense.title}</span>
            <span className="expense-amount">{expense.amount}</span>
            <button
              onClick={() => deleteExpense(expense.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
