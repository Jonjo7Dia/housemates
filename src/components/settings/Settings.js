import classes from "./Settings.module.css";
import HouseSettings from './houseSettings/HouseSettings';
import PersonalSettings from './personalSettings/PersonalSettings';
function Settings() {
  return (
    <div className={classes.settingsPage}>
      <div className={classes.settingsWrapper}>
        <HouseSettings />
        <PersonalSettings />
      </div>
    </div>
  );
}

export default Settings;
