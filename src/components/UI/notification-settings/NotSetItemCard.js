import classes from "./NotSetItemCard.module.css";

function NotSetItemCard(props) {
  return <div className={classes.notSetItemCard}>{props.children}</div>;
}

export default NotSetItemCard;
