import classes from "./NotificationsHouse.module.css";

function NotificationsHouse(props) {
  return <div className={classes.houseInvitation}>
      <div className={classes.houseInvitationInfo}>
          <p>{props.data.userName} has invited you to their home</p>
      </div>
      <div className={classes.houseInviteButton}>
          <button></button>
      </div>
  </div>;
}

export default NotificationsHouse;
