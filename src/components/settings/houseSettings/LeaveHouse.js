import classes from "./LeaveHouse.module.css";
import SettingsCard from "../../layout/navigation/Settings/SettingsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function LeaveHouse() {
  return (
    <div className={classes.leaveHouse}>
      <SettingsCard
        logo={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
        description={"Leave home"}
      />
    </div>
  );
}
export default LeaveHouse;
