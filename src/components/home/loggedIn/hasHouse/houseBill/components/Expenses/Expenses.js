import classes from "./Expenses.module.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesTotals from "./ExpensesTotals";
import React, { useState } from "react";
import ExpenseListFilter from "./ExpenseListFilter";
function Expenses(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "View All",
  ];
  let filterMonth;
  const [filteredYear, setFilteredYear] = useState("2022");
  const [filteredMonth, setFilteredMonth] = useState(
    monthNames[new Date().getMonth()]
  );
  let houseTotal = 0;

  const changeYearHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };
  const changeMonthHandler = (enteredMonth) => {
    setFilteredMonth(enteredMonth);
  };
  const filter = props.item.filter(
    (expense) => expense.date.getYear() === filteredYear - 1900
  );
  if (filteredMonth !== "View All") {
    filterMonth = props.item.filter(
      (expense) => expense.date.getMonth() === monthNames.indexOf(filteredMonth)
    );
  } else {
    filterMonth = filter;
  }
  for (let n in filterMonth) {
    houseTotal += Number(filterMonth[n].amount);
  }

  return (
    <div className={classes.expenses}>
      <ExpenseFilter selected={filteredYear} onYearFilter={changeYearHandler} />
      <ExpensesChart expenses={filter} />
      <ExpenseListFilter
        monthNames={monthNames}
        selected={filteredMonth}
        onMonthFilter={changeMonthHandler}
      />
      <ExpensesList items={filterMonth} />
      {filterMonth.length > 0 && <ExpensesTotals total={houseTotal} />}
    </div>
  );
}
export default Expenses;
