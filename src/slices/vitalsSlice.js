import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heartRate: null,
    bloodPressure: {
        systolic: null,
        diastolic: null,
    },
    pulse: null,
    timestamp: null,
};

const vitalsSlice = createSlice({
    name: 'vitals',
    initialState,
    reducers: {
        updateVitals: (state, action) => {
            const { heartRate, bloodPressure = {}, pulse, timestamp } = action.payload;
            const { systolic = null, diastolic = null } = bloodPressure;

            state.heartRate = heartRate;
            state.bloodPressure.systolic = systolic;
            state.bloodPressure.diastolic = diastolic;
            state.pulse = pulse;
            state.timestamp = timestamp;
        }
    },
});

export const { updateVitals } = vitalsSlice.actions;
export default vitalsSlice.reducer;
