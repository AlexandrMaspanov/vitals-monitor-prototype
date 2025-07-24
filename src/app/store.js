import { configureStore } from "@reduxjs/toolkit";
import vitalsReducer from '../slices/vitalsSlice';

export const store = configureStore({
    reducer: {
        vitals: vitalsReducer,
    },
});
