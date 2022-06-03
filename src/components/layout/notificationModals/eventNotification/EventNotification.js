import classes from "./EventNotification.module.css";
import NotificationsCard from "../../../UI/notifications/NotificationsCard";
import MainButton from "../../../UI/buttons/MainButton";

function EventNotification(props) {
  const closeModal = () => {
    props.data.onClick();
  };
  return (
    <NotificationsCard>
      <div className={classes.eventNotificationPopup}>
        <div className={classes.eventIntroduction}>
          <h1>
            {props.data.data.userName} has added the following expense to their
            calendar:
          </h1>
        </div>
        <div className={classes.eventInformation}>
          <div className={classes.eventTitle}>
            <h1>Gym Session @Centro </h1>
          </div>
          <div className={classes.eventDateTime}>
            <div className={classes.eventDate}>
              <h1>Date: May 15th 2022</h1>
            </div>
            <div className={classes.eventTime}>
              <h1>Time: 16:00 - 20:00</h1>
            </div>
          </div>
        </div>
        <div className={classes.eventNotificationButton}>
          <MainButton
            width={"50"}
            height={"90"}
            text={"CLOSE"}
            onClick={closeModal}
          />
        </div>
      </div>
    </NotificationsCard>
  );
}

export default EventNotification;
