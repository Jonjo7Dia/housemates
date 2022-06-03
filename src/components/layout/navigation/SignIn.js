import NavBar from "../../UI/navbar/NavBar";
import MainButton from "../../UI/buttons/MainButton";
import MinimalButton from "../../UI/buttons/MinimalButton";
import classes from "./SignIn.module.css";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
  return (
    <NavBar>
      <ul className={classes.signIn}>
        <li>
          <Link to="login">
            <MinimalButton width={100} height={75} text="Login" />
          </Link>
        </li>
        <li>
          <Link to="sign-up">
            <MainButton width={100} height={75} text="Sign Up" />
          </Link>
        </li>
      </ul>
    </NavBar>
  );
}

export default SignIn;
