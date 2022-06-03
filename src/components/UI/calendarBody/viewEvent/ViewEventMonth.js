import classes from "./ViewEventMonth.module.css";
import EventBlockMonth from "./EventBlockMonth";
function ViewEventMonth(props) {
  const DUMMY_DATA = [
    {
      color: "green",
      date: "2022-05-16",
      endTime: "10:00",
      id: "l34n2uvo",
      startTime: "07:30",
      title: "Data & Algorithm Study",
    },
    {
      color: "blue",
      date: "2022-05-16",
      endTime: "11:00",
      id: "l34n234uvo",
      startTime: "10:00",
      title: "1 on 1 meeting",
    },
    {
      color: "red",
      date: "2022-05-16",
      endTime: "12:30",
      id: "l34n23497uvo",
      startTime: "11:30",
      title: "lunch",
    },
    {
      color: "green",
      date: "2022-05-16",
      endTime: "17:00",
      id: "l34n23497asdfuvo",
      startTime: "13:00",
      title: "work on projects",
    },
    {
      color: "green",
      date: "2022-05-16",
      endTime: "09:00",
      id: "l34n0402uvo",
      startTime: "06:30",
      title: "Pool party",
    },
    {
      color: "blue",
      date: "2022-05-16",
      endTime: "09:00",
      id: "l34n234kcuvo",
      startTime: "07:00",
      title: "meeting",
    },
    {
      color: "red",
      date: "2022-05-16",
      endTime: "09:00",
      id: "l34n2349347uvo",
      startTime: "07:30",
      title: "class",
    },
  ];
  const events = DUMMY_DATA.filter(function (el) {
    return (
      new Date(el.date).getDate() + 1 === props.date.getDate() &&
      new Date(el.date).getMonth() === props.date.getMonth() &&
      new Date(el.date).getFullYear() === props.date.getFullYear()
    );
  });

  return (
    <div className={classes.viewEventMonth}>
      <div className={classes.eventsHolder}>
        {events.map((event, index) => {
          return <EventBlockMonth data={event} key={event.id} />;
        })}
      </div>
    </div>
  );
}

export default ViewEventMonth;
