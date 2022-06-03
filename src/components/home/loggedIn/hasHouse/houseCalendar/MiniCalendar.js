import classes from "./MiniCalendar.module.css";

function MiniCalendar(props) {

  return (
    <div className={classes.miniCalendar}>
        <div className={classes.miniCalendarDateInputs}>
            <div className={classes.miniCalendarDate}>
                <input type="date"/>
            </div>
            <div className={classes.miniCalendarMonth}></div>
            <div className={classes.miniCalendarYear}></div>
        </div>
    </div>
  );
}
export default MiniCalendar;
