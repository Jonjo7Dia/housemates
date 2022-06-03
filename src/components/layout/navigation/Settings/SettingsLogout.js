import classes from "./SettingsLogout.module.css";
import SettingsCard from "./SettingsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
function SettingsLogout() {
  return (
    <div className={classes.settingsLogout}>
      <SettingsCard
        logo={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
        description={"Logout"}
      />
    </div>
  );
}

export default SettingsLogout;
