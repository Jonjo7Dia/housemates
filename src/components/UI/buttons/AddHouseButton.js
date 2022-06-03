import classes from "./AddHouseButton.module.css";

function AddHouseButton(props) {
  return (
    <button className={classes.addHouseButton} onClick={props.onClick}>
      <h1>ADD A NEW HOME</h1>
    </button>
  );
}

export default AddHouseButton;
