import classes from "./Day.module.css";
import CreateEvent from "./createFunction/CreateEvent";
import { useState } from "react";
import ViewEvent from "./viewEvent/ViewEvent";
function Day(props) {
  const [addEvent, setAddEvent] = useState(false);
  const [time, setTime] = useState("");
  const hours = [
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ];
  const addEventHandler = (time) => {
    setAddEvent(!addEvent);
    setTime(time);
  };

  return (
    <div className={classes.day}>
      <div className={classes.dayHeader}> {props.day}</div>
      <div className={classes.timeBody}>
        <ViewEvent date={props.date} defaultWidth={90} />
        {hours.map((time, index) => {
          return (
            <div key={index} className={classes.timeBlock}>
              <div className={classes.time}>{time}</div>
              <div className={classes.timeEvent}>
                <div
                  className={classes.firstHalfHour}
                  onClick={() => {
                    addEventHandler(time.substring(0, 3) + "00");
                  }}
                ></div>
                <div
                  className={classes.secondHalfHour}
                  onClick={() => {
                    addEventHandler(time.substring(0, 3) + "30");
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      {addEvent && (
        <CreateEvent onClick={addEventHandler} date={props.date} time={time} />
      )}
    </div>
  );
}

export default Day;
