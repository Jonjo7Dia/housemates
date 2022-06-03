import classes from "./SignUpForm.module.css";
import MainButton from "../../UI/buttons/MainButton";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { signUpActions } from "../../../store/signUp-slice";
import { useNavigate } from "react-router";
import { httpSignUp } from "../../../hooks/requests";
function containsSpecialChars(str) {
  const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+/;
  return specialChars.test(str);
}

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const lowerCase = password.toUpperCase() === password;
  const upperCase = password.toLowerCase() === password;
  const specialChar = containsSpecialChars(password);
  const number = password.length >= 7;
  let lowerCaseStyle;
  let upperCaseStyle;
  let numberStyle;
  let specialCharStyle;
  if (!lowerCase) {
    lowerCaseStyle = { fontWeight: "bold", color: "#374052" };
  } else {
    lowerCaseStyle = { color: " #9c9c9c" };
  }
  if (!upperCase) {
    upperCaseStyle = { fontWeight: "bold", color: "#374052" };
  } else {
    upperCaseStyle = { color: " #9c9c9c" };
  }
  if (specialChar) {
    specialCharStyle = { fontWeight: "bold", color: "#374052" };
  } else {
    specialCharStyle = { color: " #9c9c9c" };
  }
  if (number) {
    numberStyle = { fontWeight: "bold", color: "#374052" };
  } else {
    numberStyle = { color: " #9c9c9c" };
  }
  async function onSubmitHandler(event) {
    event.preventDefault();
    const userInformation = {
      userName: userName,
      email: email,
      password: password,
    };
    const answer = await httpSignUp(userInformation);
    console.log(answer);
    if (!answer.error) {
      dispatch(signUpActions.setSignIn(userInformation));
      navigate("/", { replace: false });
    } else {
      alert(answer.message);

    }
  }
  return (
    <div className={classes.signUpForm}>
      <form action="" onSubmit={onSubmitHandler}>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="Username"
          required
          onBlur={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="email"
          id="emailOne"
          name="emailOne"
          placeholder="email"
          required
          onBlur={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="email"
          id="emailTwo"
          name="emailTwo"
          placeholder="confirm email"
          required
          onBlur={(e) => {
            if (e.target.value !== email) {
              alert("emails do not match");
            }
          }}
        />
        <input
          type="password"
          id="password"
          name="password"
          pattern="^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$"
          title="Minimum of 7 characters. Should have at least one special character and one number and one UpperCase Letter."
          placeholder="password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirm password"
          required
          onBlur={(e) => {
            if (e.target.value !== password) {
              alert("passwords do not match");
              setPassword("");
            }
          }}
        />
        <label htmlFor="password">
          <div className={classes.passwordRules}>
            <div className={classes.rule} style={lowerCaseStyle}>
              <div className={classes.ruleSymbol}>a</div>
              <div className={classes.ruleText}>Lowercase</div>
            </div>
            <div className={classes.rule} style={upperCaseStyle}>
              <div className={classes.ruleSymbol}>A</div>
              <div className={classes.ruleText}>Uppercase</div>
            </div>
            <div className={classes.rule} style={specialCharStyle}>
              <div className={classes.ruleSymbol}>#</div>
              <div className={classes.ruleText}>Special</div>
            </div>
            <div className={classes.rule} style={numberStyle}>
              <div className={classes.ruleSymbol}>7+</div>
              <div className={classes.ruleText}>Characters</div>
            </div>
          </div>
        </label>

        <MainButton width={30} height={12} text={"Confirm"} type={"submit"} />
      </form>
    </div>
  );
}

export default SignUpForm;
