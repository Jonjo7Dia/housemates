import {createSlice} from '@reduxjs/toolkit';


const houseInfoSlice = createSlice({
    name: 'houseInfo',
    initialState : {
        name: '',
        id: '',
        currentMembers: [
          
        ],
        expenses : [
           
        ],
        notifications : [

        ]
    },
    reducers: {
        setHouseName(state,action){
            state.name = action.payload;
        },
        setHouseId(state, action){
            state.id= action.payload;
        },
        addCurrentMembers(state, action){
            if(!(state.currentMembers.includes(action.payload))){
                console.log('hello');
                state.currentMembers = [...state.currentMembers, action.payload]

            }
            else {
                alert('member already a part of this house')
            }
        },
        addExpense(state, action ){
            state.expenses = [...state.expenses, action.payload];
        },
        addNotification(state, action){
            state.notifications = [...state.notifications, action.payload]
        }
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: false,
    }),


});

export const houseInfoActions = houseInfoSlice.actions;

export default houseInfoSlice;