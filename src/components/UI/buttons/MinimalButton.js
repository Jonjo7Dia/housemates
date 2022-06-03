import classes from "./MinimalButton.module.css";

function MinimalButton(props){
    return (
        <button className={classes.minimalButton} style={{width: props.width+ '%', height: props.height + '%'}} >
            {props.text}
        </button>
    )
};

export default MinimalButton;