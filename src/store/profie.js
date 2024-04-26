import { createSlice } from "@reduxjs/toolkit";

const profileSlice=createSlice({
    name:'profile',
    initialState:'invisible',
    reducers:{
       setProfile:(state,action)=>{
          return state=action.payload;
       }
    }
})
export const profileAction=profileSlice.actions;
export default profileSlice;