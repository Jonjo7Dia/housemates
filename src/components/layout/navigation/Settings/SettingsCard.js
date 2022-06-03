import classes from "./SettingsCard.module.css";
import NotSetItemCard from "../../../UI/notification-settings/NotSetItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function SettingsCard(props) {
  return (
    <NotSetItemCard>
      <div className={classes.settingsBody}>
        <div className={classes.settingsLogo}>
          <div className={classes.settingsLogoBackground}>{props.logo}</div>
        </div>
        <div className={classes.settingsDescription}>{props.description}</div>
        <div className={classes.settingsButton}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </NotSetItemCard>
  );
}

export default SettingsCard;
