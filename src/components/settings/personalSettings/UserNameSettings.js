import classes from "./UserNameSettings.module.css";
import MainButton from '../../UI/buttons/MainButton';
function UserNameSettings() {
  return (
    <div className={classes.userNameSettings}>
      <div className={classes.userNameHeader}>
          <h1>Change your user name</h1>
      </div>
      <div className={classes.userNameForm}>
          <form action="">
              <input type="text" placeholder={'new user name'}/>
                <MainButton width={'30'} height={'80'} text={'Confirm'}/>

          </form>
      </div>
    </div>
  );
}

export default UserNameSettings;
