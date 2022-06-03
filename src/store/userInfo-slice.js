import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    userName: "Jonathan",
    email: 'jonathan.hjelmstrom@gmail.com',
    hasHouse: false,
    houseBasic: {
      name: "",
      id: "",
    },
    events: [],
  },
  reducers: {
    setHasHouse(state, action) {
      state.hasHouse = action.payload;
    },
    setHouseBasic(state, action) {
      state.houseBasic.name = action.payload.name;
      state.houseBasic.id = action.payload.id;
    },
    addEvent(state, action) {
      state.events = [...state.events, action.payload];
      state.events = state.events.sort((a, b) => a.startTime - b.startTime);
    },
  },
});

export const userInfoActions = userInfoSlice.actions;

export default userInfoSlice;
