import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './features/slices'


export const store=configureStore({
    reducer:{
        app:sliceReducer,
    }   
})