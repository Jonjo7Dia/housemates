import React, { useState } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [toSplit, setToSplit] = useState("Evenly");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const splitChangeHandler = (event) => {
    setToSplit(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(ExpenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.expenseForm}>
      <div className={classes.newExpenseControls}>
        <div className={classes.newExpenseControl}>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.newExpenseControl}>
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min=".00"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={classes.newExpenseControl}>
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={classes.newExpenseControl}>
          <label htmlFor="">Split</label>
          <select
            type="option"
            defaultValue={toSplit}
            onChange={splitChangeHandler}
          >
              <option value="evenly">Evenly</option>
              <option value="dontSplit">Dont Split</option>
          </select>
        </div>
      </div>
      <div className={classes.newExpenseActions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
