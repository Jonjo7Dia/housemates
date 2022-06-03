import classes from "./SettingsMenu.module.css";
import DropDownCard from "../../UI/navbar/DropDownCard";
import SettingsHeader from "./Settings/SettingsHeader";
// import SettingsFeedback from './Settings/SettingsFeedback';
import SettingsSettings from './Settings/SettingsSettings';
import SettingsLogout from './Settings/SettingsLogout';
function SettingsMenu() {
  const DUMMY_DATA = { userName: "Jonathan Hjelmstrom" };
  return (
    <DropDownCard>
      <div className={classes.settingsMenu}>
        <SettingsHeader userName={DUMMY_DATA.userName} />
        {/* <SettingsFeedback /> */}
        <SettingsSettings />
        <SettingsLogout />
      </div>
    </DropDownCard>
  );
}

export default SettingsMenu;
