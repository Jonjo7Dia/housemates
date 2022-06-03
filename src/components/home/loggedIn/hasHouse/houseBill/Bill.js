import { useState } from "react";
import classes from "./Bill.module.css";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function Bill(){
    const DUMMY_EXPENSES = [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2022, 7, 14),
        },
        { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2022, 2, 28),
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2022, 5, 12),
        },
        {
            id: "e5",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2022, 5, 12),
          },
          {
            id: 'e6',
            title: 'rent',
            amount: 2000,
            date: new Date(2022, 1, 1),

          },
          {
            id: 'e7',
            title: 'rent',
            amount: 2000,
            date: new Date(2022, 2, 1),

          },
          {
            id: 'e8',
            title: 'rent',
            amount: 2000,
            date: new Date(2022, 3, 1),

          },
          {
            id: 'e9',
            title: 'rent',
            amount: 2000,
            date: new Date(2022, 4, 1),

          },
          {
            id: 'e10',
            title: 'rent',
            amount: 2000,
            date: new Date(2022, 5, 1),

          },
      ];
      const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
      const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
          return [expense,...prevExpenses];
        });
      }

    return <div className={classes.billsModal}>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses item={expenses}/>
    </div>
}

export default Bill;