// reducers/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setCounter: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { increment, decrement, setCounter } = counterSlice.actions;
export default counterSlice.reducer;
