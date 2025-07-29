import { configureStore } from "@reduxjs/toolkit";
import vitalsReducer from '../slices/vitalsSlice';
import alertsReducer from '../slices/alertsSlice';
import alertsHistoryReducer from '../slices/alertsHistorySlice';
import emergencyReducer from '../slices/emergencySlice';

export const store = configureStore({
    reducer: {
        vitals: vitalsReducer,
        alerts: alertsReducer,
        alertsHistory: alertsHistoryReducer,
        emergency: emergencyReducer,
    },
});

store.subscribe(() => {
    try {
        const state = store.getState().alertsHistory;
        localStorage.setItem('alertsHistory', JSON.stringify(state));
    } catch (error) {
        console.warn('Failed to save alertsHistory:', error);
    }
});
