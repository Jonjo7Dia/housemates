import classes from "./LoginForm.module.css";
import MainButton from "../../UI/buttons/MainButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../../../store/logIn-slice";
import { useNavigate } from "react-router";
import { httpLogin } from "../../../hooks/requests";
//need to do validation
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  async function submitHandler(event) {
    event.preventDefault();
    const userInformation = {
      email,
      password,
    };
    const answer = await httpLogin(userInformation);

    if(!answer.error){
      console.log(answer);
      localStorage.setItem('accessToken', answer.message.accessToken);
      localStorage.setItem('refreshToken', answer.message.refreshToken);
      dispatch(loginActions.setLoggedIn());
      navigate("/", { replace: false });
    }
    else {
      if(400 <=answer.message.status <= 500){
        alert('Invalid email or password')
      }
      else {
        alert('internal server error')
      }

    }
   
  }
  return (
    <div className={classes.loginForm}>
      <form action="" onSubmit={submitHandler}>
        <input
          type="email"
          id="emailOne"
          name="emailOne"
          placeholder="Email"
          onBlur={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <MainButton width={30} height={12} text={"Confirm"} type={"submit"} />
      </form>
    </div>
  );
}

export default LoginForm;
