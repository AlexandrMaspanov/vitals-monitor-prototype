import { configureStore } from "@reduxjs/toolkit";
import vitalsReducer from '../slices/vitalsSlice';
import alertsReducer from '../slices/alertsSlice';

export const store = configureStore({
    reducer: {
        vitals: vitalsReducer,
        alerts: alertsReducer,
    },
});
