import classes from "./ExpensesTotals.module.css";

function ExpensesTotal(props){
    console.log(props);
    return <div className={classes.expensesTotal}>
        <div className={classes.expenseTotal}>
            <label htmlFor="">You Owe: </label>
            <div className={classes.totalPrice}>$3000</div>
        </div>
        <div className={classes.expenseTotal}>
            <label htmlFor="">House Total:</label>
            <div className={classes.totalPrice}>${Number(props.total)}</div>
        </div>
    </div>

}

export default ExpensesTotal;