import { createSlice } from "@reduxjs/toolkit";
import { arraysEqual } from "../utils/arraysEqual";

const alertsSlice = createSlice({
    name: 'alerts',
    initialState: {
        list: [],
    },
    reducers: {
        setAlerts: (state, action) => {
            const newAlerts = action.payload;
            if (!arraysEqual(state.list, newAlerts)) {
                state.list = newAlerts;
            }
        },
        clearAlerts: (state) => {
            state.list = [];
        },
    },
});

export const { setAlerts, clearAlerts } = alertsSlice.actions;
export default alertsSlice.reducer;
