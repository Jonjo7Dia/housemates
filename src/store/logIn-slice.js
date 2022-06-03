import {createSlice} from '@reduxjs/toolkit';

const logInSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
        userName: 'Jonathan',
    },
    reducers: {
        setUserName(state, action){
           state.userName = action.payload;
        },
        setLoggedIn(state){
           state.loggedIn = true;
        },
        setLogOut(state){
            state.loggedIn = false;
        }

    }


});

export const loginActions = logInSlice.actions;

export default logInSlice;