import { useState } from "react";
import classes from "./Week.module.css";
import CreateEvent from "./createFunction/CreateEvent";
import ViewEvent from "./viewEvent/ViewEvent";

function getDateNumber(date, difference) {
  let retVal = new Date(date.getTime());
  retVal.setDate(date.getDate() + difference);
  return retVal;
}

function Week(props) {
  const [addEvent, setAddEvent] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState(props.date);
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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

  const addEventHandler = (time, index) => {
    setAddEvent(!addEvent);
    setTime(time);
    const holder = new Date(props.date);
    setDate(getDateNumber(holder, index - holder.getDay()));
  };

  return (
    <div className={classes.week}>
      <div className={classes.weekHeader}>
        {days.map((day, index) => {
          return (
            <div key={day} className={classes.dayOfWeek}>
              <div className={classes.dayAbr}>{day}</div>
              <div className={classes.dayNmbr}>
                {getDateNumber(
                  props.date,
                  index - props.date.getDay()
                ).getDate()}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.weekBody}>
        <div className={classes.timeAxis}>
          {hours.map((hour) => {
            return (
              <div className={classes.timeOfDay} key={hour}>
                <p>{hour} </p>
              </div>
            );
          })}
        </div>
        {days.map((day, index) => {
          return (
            <div className={classes.dayOfWeekEvent} key={day}>
              {hours.map((hour) => {
                return (
                  <div key={hour + day} className={classes.eventSelector}>
                    <div
                      className={classes.firstHalfHour}
                      onClick={() => {
                        addEventHandler(hour.substring(0, 3) + "00", index);
                      }}
                    ></div>
                    <div
                      className={classes.secondHalfHour}
                      onClick={() => {
                        addEventHandler(hour.substring(0, 3) + "30", index);
                      }}
                    ></div>
                  </div>
                );
              })}
              <ViewEvent
                date={getDateNumber(props.date, index - props.date.getDay())}
                defaultWidth ={95}
              />
            </div>
          );
        })}
      </div>
      {addEvent && (
        <CreateEvent onClick={addEventHandler} date={date} time={time} />
      )}
    </div>
  );
}

export default Week;
