import classes from "./ViewEvent.module.css";
import EventBlock from "./EventBlock";

function checkOverlaps(event1, event2) {
  const startTime =
    Number(event1.startTime.substring(0, 2)) +
    Number(event1.startTime.substring(3)) / 60;

  const endTime =
    Number(event2.endTime.substring(0, 2)) +
    Number(event2.endTime.substring(3)) / 60;
  return startTime < endTime;
}
function ViewEvent(props) {
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
      date: "2022-05-17",
      endTime: "10:00",
      id: "l34n0402uvo",
      startTime: "07:30",
      title: "Discrete Math",
    },
    {
      color: "green",
      date: "2022-05-17",
      endTime: "12:30",
      id: "l34n234kcuvo",
      startTime: "10:00",
      title: "work on projects",
    },
    {
      color: "red",
      date: "2022-05-17",
      endTime: "13:30",
      id: "l34n2349347uvo",
      startTime: "12:30",
      title: "lunch",
    },
    {
      color: "blue",
      date: "2022-05-17",
      endTime: "17:30",
      id: "l34n2349347uvo",
      startTime: "13:30",
      title: "meetings",
    },
    {
      color: "yellow",
      date: "2022-05-18",
      endTime: "17:30",
      id: "l34n234934743uvo",
      startTime: "07:30",
      title: "work event",
    },
    {
      color: "yellow",
      date: "2022-05-19",
      endTime: "17:30",
      id: "l34n2349347u34vo",
      startTime: "07:30",
      title: "work event",
    },
    {
      color: "green",
      date: "2022-05-20",
      endTime: "17:30",
      id: "l34n2349347u34vo",
      startTime: "07:30",
      title: "project discussions",
    },
    {
      color: "red",
      date: "2022-05-20",
      endTime: "13:30",
      id: "l34n2349347u34vo",
      startTime: "12:30",
      title: "lunch",
    }
  ];
  const events = DUMMY_DATA.filter(function (el) {
    return (
      new Date(el.date).getDate() + 1 === props.date.getDate() &&
      new Date(el.date).getMonth() === props.date.getMonth() &&
      new Date(el.date).getFullYear() === props.date.getFullYear()
    );
  });

  events.map((block, index) => {
    if (index === 0) {
      block.width = props.defaultWidth;
      block.left = 0;
    } else {
      if (checkOverlaps(block, events[index - 1])) {
        block.width = events[index - 1].width * (props.defaultWidth * 0.01 - 0.2);
        block.left = 100 - events[index - 1].width * (props.defaultWidth * 0.01 - 0.2);
      } else {
        block.width = props.defaultWidth;
        block.left = 0;
      }
    }
    return ''
  });

  return (
    <div className={classes.viewEvent}>
      {events.map((event) => {
        return <EventBlock data={event} key={event.id} width={event.width} />;
      })}
    </div>
  );
}

export default ViewEvent;
