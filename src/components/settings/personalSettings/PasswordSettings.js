import classes from "./PasswordSettings.module.css";
import MainButton from "../../UI/buttons/MainButton";
function PasswordSettings() {
  return (
    <div className={classes.userNameSettings}>
      <div className={classes.userNameHeader}>
        <h1>Change your password</h1>
      </div>
      <div className={classes.userNameForm}>
        <form action="">
          <input type="password" placeholder={"enter old password"} />
          <input type="password" placeholder={"new password"} />
          <input type="password" placeholder={"confirm password"} />

          <MainButton width={"12"} height={"80"} text={"Confirm"} />
        </form>
      </div>
    </div>
  );
}

export default PasswordSettings;
