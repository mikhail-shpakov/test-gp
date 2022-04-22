import { createSlice } from "@reduxjs/toolkit";
import goodApp from '../data/goods.json';

export const goodSlice = createSlice({
    name: 'good',
    initialState: {
        good: goodApp
    },
    reducers: {
        
    }
})

export const selectGood = state => state.good.good;
export default goodSlice.reducer;
