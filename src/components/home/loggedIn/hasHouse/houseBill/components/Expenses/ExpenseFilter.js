import classes from "./ExpenseFilter.module.css";
function ExpenseFilter(props) {
  const yearChangeHandler = (event) => {
    props.onYearFilter(event.target.value);
  };
  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expenseFilterControl}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
