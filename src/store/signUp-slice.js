import {createSlice} from '@reduxjs/toolkit';

const signUpSlice = createSlice({
    name: 'signup',
    initialState:{
        signIn: false,
        users : [
            'gon@gmail.com'
        ],
        password : '',
        email: '',
        userName : '',
    },
    reducers: {
        //have to check if there is an email already registered to this
        setSignIn(state, action){
                state.signIn= true;
                state.users = [...state.users, action.payload.email];
                state.email = action.payload.email;
                state.userName= action.payload.userName;

        }
    }
});

export const signUpActions = signUpSlice.actions;

export default signUpSlice;