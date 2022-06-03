import classes from "./HouseSettings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import HouseConfigurations from './HouseConfigurations';
import LeaveHouse from './LeaveHouse';
function HouseSettings(){
    return <div className={classes.houseSettingsHeader}>
         <div className={classes.houseNameLogo}>
            <div className={classes.houseLogo}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className={classes.houseNameDisplay}>
              <h1>Home Settings</h1>
            </div>
          </div>
          <div className={classes.houseSettingsMenu}>
              <div className={classes.bufferSpace}></div>
              <div className={classes.settingOptions}>
                  <HouseConfigurations />
                  <LeaveHouse />
              </div>
          </div>
    </div>
}
export default HouseSettings;