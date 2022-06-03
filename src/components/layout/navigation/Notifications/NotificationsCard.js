import classes from "./NotificationsCard.module.css";
import NotSetItemCard from "../../../UI/notification-settings/NotSetItemCard";
import NotificationsInfo from "./NotificationsInfo";
import NotificationModal from "../../notificationModals/NotificationModal";
import { useState } from "react";
function NotificationsCard(props) {
  const [showNotification, setShowNotification] = useState(false);

  const icon = props.info.userName.charAt(0);
  const notificationHandler = () => {
    setShowNotification(!showNotification);
  };
  return (
    <NotSetItemCard>
      <div className={classes.notificationsBody} onClick={notificationHandler}>
        <div className={classes.notificationUserIcon}>
          <div className={classes.userIconBackground}> {icon}</div>
        </div>
        <NotificationsInfo info={props.info} />
      </div>
      {showNotification && (
        <NotificationModal data={props.info} onClick={notificationHandler} />
      )}
    </NotSetItemCard>
  );
}

export default NotificationsCard;
