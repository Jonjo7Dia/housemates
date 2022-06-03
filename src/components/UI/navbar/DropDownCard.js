import classes from "./DropDownCard.module.css";

function DropDownCard(props) {
    return <div className={classes.dropDownCard}>
        {props.children}
    </div>
}

export default DropDownCard