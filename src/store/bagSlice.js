import { createSlice } from "@reduxjs/toolkit";

const bagSlice=createSlice({
    name:'bagItem',
    initialState:[],
    reducers:{
        AddToBag:(state,action)=>{
          return [...state,action.payload];
        },
        removeBag:(state,action)=>{
           let newState=state.filter((item)=>item.id!==action.payload.id);
           return newState;
        }
    }
})
export const bagAction=bagSlice.actions;
export default bagSlice;