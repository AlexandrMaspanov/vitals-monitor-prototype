const VITALS_CONFIG = {
    heartRate: {
        label: 'Heart Rate',
        unit: 'bpm',
        threshold: { min: 60, max: 100 },
    },
    systolic: {
        label: 'Systolic Pressure',
        unit: 'mmHg',
        threshold: { min: 90, max: 140 },
    },
    diastolic: {
        label: 'Diastolic Pressure',
        unit: 'mmHg',
        threshold: { min: 60, max: 90 },
    },
    pulse: {
        label: 'Pulse',
        unit: 'bpm',
        threshold: { min: 60, max: 100 },
    },
    timestamp: {
        label: 'Timestamp',
        unit: '',
        threshold: { },
    },
};

export default VITALS_CONFIG;
