import { createSlice } from "@reduxjs/toolkit";

const visibleSlice=createSlice({
    name:'visible',
    initialState:'invisible',
    reducers:{
       setVisible:(state,action)=>{
          return state=action.payload;
       }
    }
})
export const visibleAction=visibleSlice.actions;
export default visibleSlice;