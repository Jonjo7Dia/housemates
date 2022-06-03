
import classes from "./CreateEvent.module.css";
import EventForm from "./EventForm";
function CreateEvent(props) {
  const closeModal = () => {
    props.onClick();
  };
  return (
    <div className={classes.createEvent}>
      <div className={classes.exit}>
        <button onClick={closeModal}>X</button>
      </div>
      <EventForm time={props.time} date={props.date} closeForm={closeModal} />
    </div>
  );
}

export default CreateEvent;
