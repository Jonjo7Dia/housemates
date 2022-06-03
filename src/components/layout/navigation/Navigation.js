import {useState} from 'react';
import SignIn from './SignIn';
import classes from './Navigation.module.css';
import LoggedIn from './LoggedIn';
import { useSelector } from "react-redux";


function Navigation(props) {

  const loggedIn = useSelector((state) => state.login.loggedIn);

    return (
        <header className={classes.header}>
            {!loggedIn && <SignIn/>}
            {loggedIn && <LoggedIn/>}
        </header>
    )
}

export default Navigation;