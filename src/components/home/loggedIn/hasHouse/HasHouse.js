import classes from "./HasHouse.module.css";
import Calendar from "./houseCalendar/Calendar";
import Bill from "./houseBill/Bill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function HasHouse(props) {
  const members = props.house.currentMembers;
  let houseMembersComponent = (
    <div className={classes.houseMember}>
      {members.map((member, index) => {
        return (
          <div className={classes.houseMemberIcon} key={index}>
            <div classes={classes.houseMemberLogo}>{member.name.charAt(0)}</div>
          </div>
        );
      })}
    </div>
  );
  return (
    <div className={classes.hasHouseDashboard}>
      <div className={classes.hasHouseWrapper}>
        <div className={classes.houseBasicInfo}>
          <div className={classes.houseNameLogo}>
            <div className={classes.houseLogo}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div className={classes.houseNameDisplay}>
              <h1>{props.house.houseName}</h1>
            </div>
          </div>
          {houseMembersComponent}
        </div>
        <Calendar members={props.house.currentMembers}/>
        <Bill />
      </div>
    </div>
  );
}
export default HasHouse;
