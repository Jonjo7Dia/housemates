import classes from "./EventBlockMonth.module.css";

function EventBlockMonth(props) {
  const color = props.data.color;
  const colors = {
    red: " rgb(213,0,0)",
    blue: "rgb(3,155,229)",
    green: "rgb(51,182,121)",
    yellow: "rgb(246,191,38)",
  };
  return (
    <div
      className={classes.eventBlockMonth}
      style={{ backgroundColor: colors[color] }}
      onClick={() => {
        console.log(props.data);
      }}
    ></div>
  );
}

export default EventBlockMonth;
