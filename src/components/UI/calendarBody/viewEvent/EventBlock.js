import classes from "./EventBlock.module.css";

function EventBlock(props) {
  const startTime =
    Number(props.data.startTime.substring(0, 2)) +
    Number(props.data.startTime.substring(3)) / 60;

  const endTime =
    Number(props.data.endTime.substring(0, 2)) +
    Number(props.data.endTime.substring(3)) / 60;
  const totalTime = endTime - startTime;
  const height =
    "calc(" + (totalTime) * 4 + "rem" + " + " + (totalTime + 1 - 2) + "px)";
  const color = props.data.color;
  const colors = {
    red: " rgb(213,0,0)",
    blue: "rgb(3,155,229)",
    green: "rgb(51,182,121)",
    yellow: "rgb(246,191,38)",
  };
  const marginTop =
    "calc(" + (startTime - 1) * 4 + "rem" + " + " + (startTime + 1 - 2) + "px)";

  return (
    <div
      className={classes.eventBlock}
      onClick ={()=>{
          console.log(props.data)
      }}
      style={{
        height: height,
        backgroundColor: colors[color],
        marginTop: marginTop,
        marginLeft: props.data.left + '%',
        width: props.width + '%',
      }}
    >
      <div className={classes.eventBlockTitle}>
        {props.data.title === "" && <p>private</p>}
       <p> {props.data.title}</p>
       
      </div>
    </div>
  );
}
export default EventBlock;
