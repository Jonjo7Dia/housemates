import classes from "./SettingsHeader.module.css";

function SettingsHeader(props) {
  return (
    <div className={classes.settingsHeader}>
      <div className={classes.settingsProfileIcon}>
          <div className={classes.profileBackground}>
          {props.userName.charAt(0)}
          </div>
        
      </div>
      <div className={classes.settingsProfileName}> {props.userName}</div>
    </div>
  );
}

export default SettingsHeader;
