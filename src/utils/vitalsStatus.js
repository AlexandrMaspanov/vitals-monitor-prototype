import ALERT_CONFIG from '../constants/alertConfig';

export function checkVitalsStatus({ heartRate, pulse, bloodPressure }) {
    const alerts = [];

    if (heartRate && typeof heartRate === 'number') {
        if (heartRate < ALERT_CONFIG.heartRate.threshold.min) {
            alerts.push({
                type: 'low',
                field: 'heartRate',
                message: 'Low heart rate',
            })
        }
        if (heartRate > ALERT_CONFIG.heartRate.threshold.max) {
            alerts.push({
                type: 'high',
                field: 'heartRate',
                message: 'High heart rate',
            });
        }
    }

    if (pulse && typeof pulse === 'number') {
        if (pulse < ALERT_CONFIG.pulse.threshold.min) {
            alerts.push({
                type: 'low',
                field: 'pulse',
                message: 'Low pulse rate',
            });
        }
        if (pulse > ALERT_CONFIG.pulse.threshold.max) {
            alerts.push({
                type: 'high',
                field: 'pulse',
                message: 'High pulse rate',
            });
        }
    }

    if (bloodPressure && typeof bloodPressure === 'string') {
        const [sys, dia] = bloodPressure.split('/').map(Number);

        if ((sys && sys > ALERT_CONFIG.systolic.threshold.max) || (dia && dia > ALERT_CONFIG.diastolic.threshold.max)) {
            alerts.push({
                type: 'high',
                field: 'bloodPressure',
                message: 'High blood pressure',
            });
        }

        if (sys && sys < ALERT_CONFIG.systolic.threshold.min) {
            alerts.push({
                type: 'low',
                field: 'systolic',
                message: 'Low systolic pressure',
            });
        }

        if (dia && dia < ALERT_CONFIG.diastolic.threshold.min) {
            alerts.push({
                type: 'low',
                field: 'diastolic',
                message: 'Low diastolic pressure',
            });
        }
    }

    return alerts;
}
