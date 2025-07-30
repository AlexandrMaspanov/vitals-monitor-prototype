import VITALS_CONFIG from './vitalsConfig';

const ALERTS_CONFIG = {
    heartRate: {
        ...VITALS_CONFIG.heartRate,
        order: 1,
    },
    systolic: {
        ...VITALS_CONFIG.systolic,
        order: 3,
    },
    diastolic: {
        ...VITALS_CONFIG.diastolic,
        order: 4,
    },
    pulse: {
        ...VITALS_CONFIG.pulse,
        order: 2,
    },
};

export default ALERTS_CONFIG;
