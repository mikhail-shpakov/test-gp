import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import goodReducer from "./goodSlice";


export default configureStore({
    reducer: {
        cart: cartReducer,
        good: goodReducer
    },
});