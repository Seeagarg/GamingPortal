import { createSlice } from "@reduxjs/toolkit";

const initialState={lang:0}

const langSlice = createSlice({
    name:'langSlice',
    initialState:initialState,
    reducers:{
        setLanguage:(state,action)=>{
            state.lang = action.payload;
            return state;
        }
    }
})

export const {setLanguage} = langSlice.actions;
export default langSlice.reducer;
