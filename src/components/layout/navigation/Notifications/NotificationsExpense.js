import classes from "./NotificationsExpense.module.css";

function NotificationsExpense(props) {
  return (
    <div className={classes.expenseInvitation}>
      <div className={classes.expenseInvitationInfo}>
        <p>{props.data.userName} has added an expense to your home</p>
      </div>
    </div>
  );
}

export default NotificationsExpense;
