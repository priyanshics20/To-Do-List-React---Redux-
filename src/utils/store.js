// configuration of store 
import { configureStore } from "@reduxjs/toolkit";
import slice from './slice';

const store = configureStore({
    reducer : {
        Toddos : slice
    },
})
export default store;