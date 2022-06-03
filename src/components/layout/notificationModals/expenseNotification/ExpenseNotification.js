import NotificationsCard from "../../../UI/notifications/NotificationsCard";
import classes from "./ExpenseNotification.module.css";
import MainButton from "../../../UI/buttons/MainButton";
function ExpenseNotification(props) {
  const closeModal = () => {
    props.data.onClick();
  };
  return (
    <NotificationsCard>
      <div className={classes.expenseNotification}>
        <div className={classes.expenseInformation}>
          <div className={classes.expenseDescription}>
            <h1>
              {props.data.data.userName} has added the following expense to the
              budget:
            </h1>
            <h1>{props.data.data.id}</h1>{" "}
            {/* <=== need to fetch the expense data*/}
          </div>
        </div>
        <div className={classes.expenseNotificationButton}>
          <MainButton
            width={"100"}
            height={"50"}
            text={"CLOSE"}
            onClick={closeModal}
          ></MainButton>
        </div>
      </div>
    </NotificationsCard>
  );
}

export default ExpenseNotification;
