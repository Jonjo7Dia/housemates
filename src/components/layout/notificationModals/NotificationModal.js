import NotificationsOverlay from "../../UI/notifications/NotificationsOverlay";
import ExpenseNotification from "./expenseNotification/ExpenseNotification";
import EventNotification from "./eventNotification/EventNotification";
import JoinHouse from "./joinHouse/JoinHouse";
function NotificationModal(props) {
  if (props.data.type === "expense") {
    return (
      <NotificationsOverlay>
        <ExpenseNotification data ={props}/>
      </NotificationsOverlay>
    );
  }
  if (props.data.type === "calendar") {
    return (
      <NotificationsOverlay>
        <EventNotification data={props} />
      </NotificationsOverlay>
    );
  }
  if (props.data.type === "invitation") {
    return (
      <NotificationsOverlay>
        <JoinHouse  data ={props}/>
      </NotificationsOverlay>
    );
  }
}

export default NotificationModal;
