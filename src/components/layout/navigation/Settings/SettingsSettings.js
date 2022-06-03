import classes from "./SettingsSettings.module.css";
import SettingsCard from "./SettingsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear} from "@fortawesome/free-solid-svg-icons";
function SettingsSettings() {
  return (
    <div className={classes.settingsSettings}>
      <SettingsCard
        logo={<FontAwesomeIcon icon={faGear} />}
        description={"Settings & privacy"}
      />
    </div>
  );
}

export default SettingsSettings;
