import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heartRate: null,
    bloodPressure: null,
    pulse: null,
    timestamp: null,
};

const vitalsSlice = createSlice({
    name: 'vitals',
    initialState,
    reducers: {
        updateVitals: (state, action) => {
            const { heartRate, bloodPressure, pulse, timestamp } = action.payload;
            state.heartRate = heartRate;
            state.bloodPressure = bloodPressure;
            state.pulse = pulse;
            state.timestamp = timestamp;
        }
    }
});

export const { updateVitals } = vitalsSlice.actions;
export default vitalsSlice.reducer;
