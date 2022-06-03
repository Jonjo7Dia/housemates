import classes from "./Home.module.css";
import NotLoggedIn from "./notLoggedIn/NotLoggedIn";
import Dashboard from "./loggedIn/Dashboard";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../store/logIn-slice";
import { useEffect } from "react";
function Home() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const signUp = useSelector((state) => state.signUp);

  useEffect(() => {
    if (signUp.signIn) {
      dispatch(loginActions.setLoggedIn());
      dispatch(loginActions.setUserName(signUp.userName));
    }
  }, []);
  return (
    <div className={classes.homePage}>
      <div className={classes.homePageWrapper}>
        {!loggedIn && <NotLoggedIn></NotLoggedIn>}
        {loggedIn && <Dashboard />}
      </div>
    </div>
  );
}

export default Home;
