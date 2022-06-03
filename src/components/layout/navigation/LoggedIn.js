import classes from "./LoggedIn.module.css";
import NavBar from "../../UI/navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NotificationMenu from './NotificationMenu';
import SettingsMenu from './SettingsMenu';
function LoggedIn() {
  const profile = { profileName: "J", notifications: true };
  const [hasNotifcation, setHasNotification] = useState(profile.notifications);
  const [showNotifcations, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  let notificationClass;
  if (!hasNotifcation) {
    notificationClass = {position: 'relative'};
  } else {
    notificationClass = { backgroundColor: "#374052", color: "white", position: "relative" };
  }
  const notificationHandler = () => {
    profile.notifications = false;
    setHasNotification(false);
    setShowNotifications(!showNotifcations);
    setShowSettings(false);
  };
  const settingsHandler =() => {
    setShowSettings(!showSettings);
    setShowNotifications(false);
  }

  return (
    <NavBar>
      <div className={classes.loggedInNav}>
        <div className={classes.navNotifications}>
          <div
            className={classes.navLoggedInBkg}
            style={(notificationClass)}
            onClick={notificationHandler}
          >
            <h1>
              <FontAwesomeIcon icon={faBell} />
            </h1>
          </div>
          
        </div>
        <div className={classes.navUserIcon} onClick={settingsHandler}>
          <div className={classes.navLoggedInBkg}>
            <h1 className={classes.navUserName}>{profile.profileName}</h1>
            <h1>
              <FontAwesomeIcon icon={faCaretDown} />
            </h1>
          </div>
         
        </div>
        {showNotifcations && <NotificationMenu/> }
        {showSettings && <SettingsMenu/>}
      </div>
    </NavBar>
  );
}

export default LoggedIn;
