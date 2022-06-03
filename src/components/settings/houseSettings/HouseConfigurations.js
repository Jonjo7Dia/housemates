import classes from "./HouseConfigurations.module.css";
import SettingsCard from "../../layout/navigation/Settings/SettingsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear} from "@fortawesome/free-solid-svg-icons";
function HouseConfiguration() {
  return (
    <div className={classes.houseConfigurations}>
      <SettingsCard
        logo={<FontAwesomeIcon icon={faGear} />}
        description={"Configure your home"}
      />
    </div>
  );
}

export default HouseConfiguration;


