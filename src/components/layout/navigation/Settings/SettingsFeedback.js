import classes from "./SettingsFeedback.module.css";
import SettingsCard from "./SettingsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
function SettingsFeedback() {
  return (
    <div className={classes.settingsFeedback}>
      <SettingsCard
        logo={<FontAwesomeIcon icon={faMessage} />}
        description={"Give feedback"}
      />
    </div>
  );
}

export default SettingsFeedback;
