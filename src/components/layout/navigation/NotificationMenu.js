import classes from "./NotificationMenu.module.css";
import DropDownCard from "../../UI/navbar/DropDownCard";
import NotificationsCard from "./Notifications/NotificationsCard";
function NotificationMenu() {
  const DUMMY_NOTIFICATIONS = [
    {
      type: "invitation",
      userName: "Jonathan",
      id: "234tggyhj",
    },
    { type: "calendar", userName: "Mili", id: "ajsdfi2ij" },
    { type: "expense", userName: "Gonzalo", id: "12039" },
    { type: "calendar", userName: "Mili", id: "ajsdfi2ijdsf" },
    { type: "expense", userName: "Gonzalo", id: "12039234" },
    { type: "calendar", userName: "Mili", id: "ajsdfiasdf2ij" },
    { type: "expense", userName: "Gonzalo", id: "123eef039" },
    { type: "calendar", userName: "Mili", id: "ajsdfsdfasdfi2ij" },
    { type: "expense", userName: "Gonzalo", id: "12023443239" },
  ];

  return (
    <DropDownCard>
      <div className={classes.notificationMenu}>
        <div className={classes.notificationMenuHeader}>
          <h1>Notifications</h1>
        </div>
      </div>
      <div className={classes.notificationsMenuBody}>
        {DUMMY_NOTIFICATIONS.reverse().map((notification) => {
          return (
            <NotificationsCard info={notification} key={notification.id} />
          );
        })}
      </div>
    </DropDownCard>
  );
}

export default NotificationMenu;
