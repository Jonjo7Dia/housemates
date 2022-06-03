import classes from "./Calendar.module.css";
import CalendarSettings from "./CalendarSettings";
import Day from "../../../../UI/calendarBody/Day";
import Week from "../../../../UI/calendarBody/Week";
import Month from "../../../../UI/calendarBody/Month";
import { useState } from "react";
function Calendar(props) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const [date, setDate] = useState(today);
  const [period, setPeriod] = useState("Week");
  const [addPeriod, setAddPeriod] = useState(7);
  const setPeriodToDay = () => {
    setPeriod((currentPeriod) => {
      return (currentPeriod = "Day");
    });
    setAddPeriod((currentState) => {
      return (currentState = 1);
    });
  };
  const setPeriodToWeek = () => {
    setPeriod((currentPeriod) => {
      return (currentPeriod = "Week");
    });
    setAddPeriod((currentState) => {
      return (currentState = 7);
    });
  };
  const setPeriodToMonth = () => {
    setPeriod((currentPeriod) => {
      return (currentPeriod = "Month");
    });
    setAddPeriod((currentState) => {
      return (currentState = 30);
    });
  };
  const nextPeriod = () => {
    setDate(new Date(date.setDate(date.getDate() + addPeriod)));
  };
  const prevPeriod = () => {
    setDate(new Date(date.setDate(date.getDate() - addPeriod)));
  };
  const setNewDate = (newDate) => {
    let holder = new Date(newDate);
    holder = holder.setDate(holder.getDate() + 1);
    setDate((currentState) => {
      return (currentState =(new Date(holder)));
    });
  };

  return (
    <div className={classes.calendarModal}>
      <CalendarSettings
        date={date.toDateString()}
        period={period}
        setToDay={setPeriodToDay}
        setToWeek={setPeriodToWeek}
        setToMonth={setPeriodToMonth}
        nextPeriod={nextPeriod}
        prevPeriod={prevPeriod}
        members={props.members}
        actualDate={date}
        changeDate={setNewDate}
      />
      {period === "Day" && (
        <Day day={date.toLocaleString("en-us", { weekday: "long" }) } date={date}/>
      )}
      {period === "Week" && <Week date={date} />}
      {period === "Month" && <Month date={date} />}
    </div>
  );
}

export default Calendar;
