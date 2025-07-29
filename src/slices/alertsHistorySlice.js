import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const serialized = localStorage.getItem('alertsHistory');
        return serialized ? JSON.parse(serialized) : { items: [] };
    } catch (error) {
        console.warn('Failed to load alertsHistory:', error);
        return { items: [] };
    }
}

const initialState = loadFromLocalStorage();

const alertsHistorySlice = createSlice({
    name: 'alertsHistory',
    initialState,
    reducers: {
        addAlert: (state, action) => {
            const alert = {
                ...action.payload,
                synced: false
            };
            state.items.push(alert);
        },
        markAsSynced: (state, action) => {
            const alert = state.items.find(a => a.id === action.payload);
            if (alert) alert.synced = true;
        },
        clearSynced: (state) => {
            state.items = state.items.filter(a => !a.synced);
        },
        clearAllHistory: (state) => {
            if (state.items.length > 0) {
                state.items = [];
            }
        },
    }
});

export const { addAlert, markAsSynced, clearSynced, clearAllHistory } = alertsHistorySlice.actions;
export default alertsHistorySlice.reducer;
