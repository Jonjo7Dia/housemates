import classes from "./EventForm.module.css";
import MainButton from "../../buttons/MainButton";
import { useState } from "react";
import uniqid from "uniqid";
function EventForm(props) {
  let today = props.date;
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(today);
  const [color, setColor] = useState("red");
  const [startTime, setStartTime] = useState(props.time);
  const [endTime, setEndTime] = useState();
  const submitHandler = (event) => {
      if(!endTime){
          alert('please input an end time')
      }
      else {
        event.preventDefault();
        const eventObject = {
          id: uniqid(),
          color,
          title,
          date,
          startTime,
          endTime,
        };
        console.log(eventObject);
        setTitle('');
        setDate();
        setColor('red');
        setStartTime();
        setEndTime();
        props.closeForm();
      }
     //this will have to be pushed later to
  };
  return (
    <div className={classes.eventForm}>
      <form>
        <div className={classes.eventTitleInput}>
          <input
            type="text"
            placeholder={"Add title"}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className={classes.colorPicker}>
          <div
            className={classes.red}
            {...(color === "red" && { style: { border: "solid 2px #374052" } })}
            onClick={() => {
              setColor("red");
            }}
          ></div>
          <div
            className={classes.blue}
            {...(color === "blue" && {
              style: { border: "solid 2px #374052" },
            })}
            onClick={() => {
              setColor("blue");
            }}
          ></div>
          <div
            className={classes.green}
            {...(color === "green" && {
              style: { border: "solid 2px #374052" },
            })}
            onClick={() => {
              setColor("green");
            }}
          ></div>
          <div
            className={classes.yellow}
            {...(color === "yellow" && {
              style: { border: "solid 2px #374052" },
            })}
            onClick={() => {
              setColor("yellow");
            }}
          ></div>
        </div>

        <div className={classes.datePicker}>
          <input
            type="date"
            required={true}
            defaultValue={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <div className={classes.timePicker}>
          <input
            type="time"
            required={true}
            defaultValue={startTime}
            onChange={(e) => {
              setStartTime(e.target.value);
            }}/>
          -
          <input type="time" required={true} onChange={(e) => {setEndTime(e.target.value); }}/>
        </div>
        <div className={classes.submitEvent}>
          <MainButton
            text={"Submit"}
            height={"50"}
            width={"50"}
            onClick={submitHandler}

          />
        </div>
      </form>
    </div>
  );
}

export default EventForm;
