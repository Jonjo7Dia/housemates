import classes from "./NotificationsCard.module.css";

function NotificationsCard(props){
    return <div className={classes.notificationsCard}>
        {props.children}
    </div>
}

export default NotificationsCard;