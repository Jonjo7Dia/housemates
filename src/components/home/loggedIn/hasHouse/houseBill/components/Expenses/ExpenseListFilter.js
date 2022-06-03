
import classes from "./ExpenseListFilter.module.css";

function ExpenseListFilter(props) {
  const monthChangeHandler = (event) => {
      props.onMonthFilter(event.target.value)
  }
  const monthNames = props.monthNames;
  return (
    <div className={classes.expenseListFilter}>
      <div className={classes.expensesListFilterControl}>
        <label htmlFor="">Filter by Month</label>
        <select defaultValue={props.selected} onChange={monthChangeHandler}>
          {monthNames.map((month) => {
            return (
              <option key={month} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
export default ExpenseListFilter;
