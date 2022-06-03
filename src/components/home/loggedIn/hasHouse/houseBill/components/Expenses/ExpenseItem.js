import classes from "./ExpenseItem.module.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <li>
      <div className={classes.expenseItem}>
        <div className={classes.expenseDate}>
          <div className={classes.expenseDateMonth}>{month}</div>
          <div className={classes.expenseDateDay}>{day}</div>
        </div>
        <div className={classes.expenseItemDescription}>
          <h2>{props.title}</h2>
          <div className={classes.expenseItemPrice}> ${props.amount}</div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;