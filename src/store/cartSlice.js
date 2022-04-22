import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        cart: {}
    },
    reducers:{
        increment: (state, data) => {
            let articul = data.payload;
            if (state.cart[articul] === undefined) state.cart[articul] = 0;
            state.cart[articul]++;
        },
        add: state=>{
            state.value++;
        },
        minus: (state, data) => {
            let articul = data.payload;
            if(state.cart[articul] === 1) {
                delete state.cart[articul]
                state.value--;
            }else if (state.cart[articul] !==0){
                state.cart[articul]--;
                state.value--;
            }
        },
        remove: (state, data) => {
            let articul = data.payload;
            delete state.cart[articul];
            state.value = 0;
        }
       },
});

export const {increment, add, minus, remove} = cartSlice.actions;
export const selectCart = state => state.cart.cart;
export const selectValue = state => state.cart.value;

export default cartSlice.reducer;