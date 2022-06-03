import { useState } from "react";
import classes from "./Month.module.css";
import CreateEvent from './createFunction/CreateEvent';
import ViewEventMonth from './viewEvent/ViewEventMonth';
function getStartOfMonth(date) {
  let retVal = new Date(date.getTime());
  let takeAway = retVal.getDate();
  retVal.setDate(date.getDate() - takeAway + 1);
  return retVal;
}

function getDateNumber(date, difference) {
  let retVal = new Date(date.getTime());
  retVal.setDate(date.getDate() + difference);
  return retVal;
}
//getDateNumber(props.date, (index-props.date.getDay()))
function Month(props) {
  const [addEvent, setAddEvent] = useState(false);
  const addEventHandler = (time) => {
    setAddEvent(!addEvent);

  };

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const start = getStartOfMonth(props.date);
  const difference = 7 - start.getDay();
  const startWeek = getDateNumber(start, difference);
  return (
    <div className={classes.month}>
      <div className={classes.weekInMonth}>
        {days.map((day, index) => {
          return (
            <div className={classes.dayInMonth} key={1 * index}>
              <div className={classes.dayInMonthHeader}>
                <p>{day} </p>
                <p>
                  {index === start.getDay() &&
                    monthNames[start.getMonth()] + " " + 1}
                  {!(index === start.getDay()) &&
                    getDateNumber(start, index - start.getDay()).getDate()}
                </p>
              </div>
              <div
                className={classes.dayInMonthBody}
                onClick={() => {
                  addEventHandler(getDateNumber(start, index - start.getDay()));
                }}
              >
                <ViewEventMonth date={getDateNumber(start, index - start.getDay())}/>
              </div>
              
            </div>
          );
        })}
      </div>
      <div className={classes.weekInMonth}>
        {days.map((day, index) => {
          return (
            <div className={classes.dayInMonth} key={2 * index}>
              <div className={classes.dayInMonthHeader}>
                <p>{getDateNumber(startWeek, index).getDate()}</p>
              </div>
              <div
                className={classes.dayInMonthBody}
                onClick={() => {
                  addEventHandler(getDateNumber(startWeek, index));
                }}
              >
                <ViewEventMonth date={getDateNumber(start, index)}/>

              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.weekInMonth}>
        {days.map((day, index) => {
          return (
            <div className={classes.dayInMonth} key={3 * index}>
              <div className={classes.dayInMonthHeader}>
                <p>{getDateNumber(startWeek, index + 7).getDate()}</p>
              </div>
              <div
                className={classes.dayInMonthBody}
                onClick={() => {
                  addEventHandler(getDateNumber(startWeek, index + 7));
                }}
              >
                <ViewEventMonth date={getDateNumber(start, index+7)}/>

              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.weekInMonth}>
        {days.map((day, index) => {
          return (
            <div className={classes.dayInMonth} key={4 * index}>
              <div className={classes.dayInMonthHeader}>
                <p>{getDateNumber(startWeek, index + 14).getDate()}</p>
              </div>
              <div
                className={classes.dayInMonthBody}
                onClick={() => {
                  addEventHandler(getDateNumber(startWeek, index + 14));
                }}
              >
                <ViewEventMonth date={getDateNumber(start, index+14)}/>

              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.weekInMonth}>
        {days.map((day, index) => {
          return (
            <div className={classes.dayInMonth} key={5 * index}>
              <div className={classes.dayInMonthHeader}>
                <p>
                  {getDateNumber(startWeek, index + 21).getDate() === 1 &&
                    monthNames[getDateNumber(startWeek, 32).getMonth()] +
                      " " +
                      1}
                </p>
                <p>
                  {getDateNumber(startWeek, index + 21).getDate() !== 1 &&
                    getDateNumber(startWeek, index + 21).getDate()}
                </p>
              </div>
              <div
                className={classes.dayInMonthBody}
                onClick={() => {
                  addEventHandler(getDateNumber(startWeek, index + 21));
                }}
              >
                <ViewEventMonth date={getDateNumber(start, index+21)}/>

              </div>
            </div>
          );
        })}
      </div>
      {addEvent && (
        <CreateEvent onClick={addEventHandler} date={props.date} time={'01:00'}/>
      )}
    </div>
  );
}

export default Month;
