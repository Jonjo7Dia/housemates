import classes from "./LogoutSettings.module.css";
import SettingsCard from "../../layout/navigation/Settings/SettingsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function LogoutSettings() {
  return (
    <div className={classes.logoutSettings}>
      <SettingsCard
        logo={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
        description={"Log Out"}
      />
    </div>
  );
}
export default LogoutSettings;
