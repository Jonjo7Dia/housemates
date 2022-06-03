import {configureStore} from '@reduxjs/toolkit';
import signUpSlice from './signUp-slice';
import logInSlice from './logIn-slice';
import userInfoSlice from './userInfo-slice';
import houseInfoSlice from './houseInfo-slice';
const store = configureStore({
    reducer : {signUp: signUpSlice.reducer, login: logInSlice.reducer, userInfo: userInfoSlice.reducer, houseInfo: houseInfoSlice.reducer}
});

export default store;