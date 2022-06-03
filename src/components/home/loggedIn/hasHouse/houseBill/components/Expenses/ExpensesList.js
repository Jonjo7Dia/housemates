import classes from "./ExpensesList.module.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className={classes.expenseListFallback}>Found no expenses</h2>;
  }
  console.log(props)
  return (
    <div className={classes.expenseListWrapper}>


      <ul className={classes.expensesList}>
        {props.items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ExpensesList;
