const DEFAULT_COLORS = {
    up: { base: '#ffe0e0', extreme: '#ed1b24' },
    down: { base: '#d0e9ff', extreme: '#005288' }
};

const ALERT_CONFIG = {
    heartRate: {
        order: 1,
        label: 'Heart Rate',
        unit: 'bpm',
        threshold: { min: 60, max: 100 },
        tooltip: 'Typical resting heart rate range',
        precision: 0,
        severityScale: {
            enabled: true,
            stepUp: 1, //5,
            stepDown: 1, //2,
            max: 125,
            min: 40
        },
        colors: DEFAULT_COLORS,
    },
    pulse: {
        order: 2,
        label: 'Pulse',
        unit: 'bpm',
        threshold: { min: 60, max: 100 },
        tooltip: 'Pulse measured via sensor',
        precision: 0,
        severityScale: {
            enabled: true,
            stepUp: 1, //5,
            stepDown: 1, //2,
            max: 125,
            min: 40
        },
        colors: DEFAULT_COLORS,
    },
    systolic: {
        order: 3,
        label: 'Systolic Pressure',
        unit: 'mmHg',
        threshold: { min: 90, max: 140 },
        tooltip: 'Upper blood pressure value',
        precision: 0,
        severityScale: {
            enabled: true,
            stepUp: 1, //5,
            stepDown: 1, //2,
            max: 165,
            min: 70
        },
        colors: DEFAULT_COLORS,
    },
    diastolic: {
        order: 4,
        label: 'Diastolic Pressure',
        unit: 'mmHg',
        threshold: { min: 60, max: 90 },
        tooltip: 'Lower blood pressure value',
        precision: 0,
        severityScale: {
            enabled: true,
            stepUp: 1, //5,
            stepDown: 1, //2,
            max: 165,
            min: 70
        },
        colors: DEFAULT_COLORS,
    }
};

export default ALERT_CONFIG;
