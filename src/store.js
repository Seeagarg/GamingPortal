import { configureStore } from "@reduxjs/toolkit";
import langSliceReducer from "./Slices/langSlice";

const store = configureStore({
    reducer:{
        langSlice:langSliceReducer
    }
})

export default store;