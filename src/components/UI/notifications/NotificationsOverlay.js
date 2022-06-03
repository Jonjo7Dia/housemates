import classes from './NotificationsOverlay.module.css';
function NotificationsCard(props){
    return <div className={classes.notificationsOverlay}>
       {props.children}
    </div>
}

export default NotificationsCard;