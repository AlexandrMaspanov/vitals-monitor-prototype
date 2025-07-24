import { createSlice } from "@reduxjs/toolkit";
import { arraysEqual } from "../utils/arraysEqual";

const alertsSlice = createSlice({
    name: 'alerts',
    initialState: {
        list: [],
        hasAlerts: false,
    },
    reducers: {
        setAlerts: (state, action) => {
            const incoming = [...action.payload].sort();
            if (!arraysEqual(state.list, incoming)) {
                state.list = incoming;
                state.hasAlerts = incoming.length > 0;
            }
        },
        clearAlerts: (state) => {
            if (state.list.length > 0) {
                state.list = [];
                state.hasAlerts = false;
            }
        },
    },
});

export const { setAlerts, clearAlerts } = alertsSlice.actions;
export default alertsSlice.reducer;
