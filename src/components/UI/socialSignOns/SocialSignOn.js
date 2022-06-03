import classes from "./SocialSignOn.module.css";

function SocialSignOn(props){
    return <div className={classes.socialButton}>
        <div className={classes.socialLogo}>{props.logo}</div>
        <div className={classes.socialName}> {props.name}</div>
    </div>

}

export default SocialSignOn;