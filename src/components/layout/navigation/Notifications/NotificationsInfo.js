import classes from "./NotificationsInfo.module.css";
import NotificationsHouse from "./NotificationsHouse";
import NotificationsCalendar from "./NotificationsCalendar";
import NotificationsExpense from "./NotificationsExpense";
function NotificationsInfo(props) {
  if (props.info.type === "invitation") {
    return (
      <div className={classes.notificationsInfo} key={props.info.id}>
        <NotificationsHouse data={props.info} />
      </div>
    );
  }
  if (props.info.type === "calendar") {
    return (
      <div className={classes.notificationsInfo} key={props.info.id}>
        <NotificationsCalendar data={props.info} />
      </div>
    );
  }
  if (props.info.type === "expense") {
    return (
      <div className={classes.notificationsInfo} key={props.info.id}>
        <NotificationsExpense data={props.info} />
      </div>
    );
  }
}

export default NotificationsInfo;
