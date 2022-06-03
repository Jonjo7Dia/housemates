import classes from "./JoinHouse.module.css";
import { useState } from "react";
import NotificationsCard from "../../../UI/notifications/NotificationsCard";
import MainButton from "../../../UI/buttons/MainButton";
function JoinHouse(props) {
  const [hasHouse, setHasHouse] = useState(true);
  const joinButtonHandler = () => {
    console.log(props.data.data.id); // <== this will be swapped out for
    props.data.onClick();
  };
  const closeInvitationHandler = () => {
    props.data.onClick();
  };
  return (
    <NotificationsCard>
      {!hasHouse && (
        <div className={classes.joinHouse}>
          <div className={classes.houseInvite}>
            <div className={classes.inviteDescription}>
              <h1>
                {props.data.data.userName} has invited you to their home. Click
                join if you would like to be apart of their home!
              </h1>
            </div>
          </div>
          <div className={classes.joinHouseButton}>
            <MainButton
              width={"100"}
              height={"100"}
              text={"JOIN"}
              onClick={joinButtonHandler}
            ></MainButton>
          </div>
        </div>
      )}
      {hasHouse && (
        <div className={classes.joinHouse}>
          <div className={classes.houseInvite}>
            <div className={classes.inviteDescription}>
              <h1>
                Unfortunately it seems you are already a part of a home. Please
                leave that home if you wish to join this one!
              </h1>
            </div>
          </div>
          <div className={classes.joinHouseButton}>
            <MainButton
              width={"100"}
              height={"100"}
              text={"CLOSE"}
              onClick={closeInvitationHandler}
            ></MainButton>
          </div>
        </div>
      )}
    </NotificationsCard>
  );
}

export default JoinHouse;
