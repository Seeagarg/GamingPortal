
import { createSlice } from "@reduxjs/toolkit";

const initialState={open:false}

const sideBarSlice = createSlice({
    name:'sideBarSlice',
    initialState:initialState,
    reducers:{
        openSideBar:(state,action)=>{
            state.open = true;
            return state;
        },
        closeSideBar:(state,action)=>{
            state.open = false;
            return state;
        }
    }
})

export const {openSideBar,closeSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer;
