import { VITALS_CONFIG } from '../constants';

export const getVitalsList = () => {
    const list = [];

    for (const [key, config] of Object.entries(VITALS_CONFIG)) {
        if (key === 'systolic' || key === 'diastolic') {
            continue;
        }

        list.push({ key, ...config });
    }

    const systolic = VITALS_CONFIG.systolic;
    const diastolic = VITALS_CONFIG.diastolic;

    if (systolic && diastolic) {
        const min = {systolic: systolic.threshold.min, diastolic: diastolic.threshold.min};
        const max = {systolic: systolic.threshold.max, diastolic: diastolic.threshold.max};

        list.push({
            key: 'bloodPressure',
            label: 'Blood Pressure',
            unit: 'mmHg',
            threshold: { min, max },
        });
    }

    return list;
}

export const formatValue = (value) => {
    if (value === null || value === undefined) {
        return '--';
    }

    if (typeof value === 'object' && value !== null) {
        return Object.keys(value)
            .map(key => value[key] ?? '--')
            .join('/');
    }

    return value;
};
