import classes from "./CalendarSettings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountIcons from "../../../../UI/accountIcons/AccountIcons";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function CalendarSettings(props) {
  const members = props.members;
  let today = props.actualDate;
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  return (
    <div className={classes.calendarSettings}>
      <div className={classes.currentDate}>
        <div className={classes.prevDate} onClick={props.prevPeriod}>
          <FontAwesomeIcon icon={faCaretLeft} className={classes.dateArrows} />
        </div>
        <div className={classes.viewDate}>
          <input
            type="date"
            value={today}
            className={classes.inputCalDate}
            onChange={(event) => {
              props.changeDate(new Date(event.target.value));
            }}
          />
        </div>

        <div className={classes.nextDate} onClick={props.nextPeriod}>
          <FontAwesomeIcon icon={faCaretRight} className={classes.dateArrows} />
        </div>
      </div>
      <AccountIcons members={members} />
      <div className={classes.dateViewStyle}>
        <div className={classes.dateViewDay} onClick={props.setToDay}>
          Day
        </div>
        <div className={classes.dateViewWeek} onClick={props.setToWeek}>
          Week
        </div>
        <div className={classes.dateViewMonth} onClick={props.setToMonth}>
          Month
        </div>
      </div>
    </div>
  );
}
export default CalendarSettings;
