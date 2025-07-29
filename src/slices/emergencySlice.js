import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSending: false,
    error: null,
    timestamp: null,
};

const emergencySlice = createSlice({
    name: 'emergency',
    initialState,
    reducers: {
        sendStart: (state) => {
            state.isSending = true;
            state.error = null;
        },
        sendSuccess: (state) => {
            state.isSending = false;
            state.timestamp = Date.now();
        },
        sendFail: (state, action) => {
            state.isSending = false;
            state.error = action.payload;
        }
    },
});

export const { sendStart, sendSuccess, sendFail } = emergencySlice.actions;
export default emergencySlice.reducer;
