import classes from "./PersonalSettings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import UserNameSettings from './UserNameSettings';
import PasswordSettings from './PasswordSettings';
import LogoutSettings from './LogoutSettings';
function PersonalSettings(){
    return <div className={classes.personalSettingsHeader}>
         <div className={classes.houseNameLogo}>
            <div className={classes.houseLogo}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={classes.houseNameDisplay}>
              <h1>Personal Settings</h1>
            </div>
          </div>
          <div className={classes.houseSettingsMenu}>
              <div className={classes.bufferSpace}></div>
              <div className={classes.settingOptions}>
                  <UserNameSettings />
                  <PasswordSettings />
                  <LogoutSettings/>
              </div>
          </div>
    </div>
}
export default PersonalSettings;