import classes from "./NotLoggedIn.module.css";
import MainButton from "../../UI/buttons/MainButton";
import { Link } from "react-router-dom";
function NotLoggedIn() {
  return (
    <div className={classes.notLoggedInBody}>
      <div className={classes.applicationDescription}>
        <div className={classes.descriptionContent}>
          <h1>One Roof, One Home,</h1>
          <h1>Many Lives</h1>
          <h4>lets keep our sometimes chaotic lives organized</h4>
          <Link to="sign-up">
            <MainButton width={100} height={100} text={"Sign Up"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotLoggedIn;
