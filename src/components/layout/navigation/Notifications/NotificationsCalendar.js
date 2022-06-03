import classes from "./NotificationsCalendar.module.css";

function NotificationsCalendar(props) {
  return <div className={classes.calendarInvitation}>
      <div className={classes.calendarInvitationInfo}>
          <p>{props.data.userName} has added to their schedule</p>
      </div>
  </div>;
}

export default NotificationsCalendar;