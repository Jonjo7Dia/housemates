import classes from "./MainButton.module.css";

function MainButton(props) {
  return (
    <button
      className={classes.mainButton}
      style={{ width: props.width + "%", height: props.height + "%" }}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
}

export default MainButton;
