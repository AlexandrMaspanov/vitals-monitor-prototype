import { ALERTS_CONFIG } from '../constants';

export const createAlert = (metricKey, value) => {
    const config = ALERTS_CONFIG[metricKey];
    if (!config) return null;

    if (value == null) return null;

    const { label, unit, threshold } = config;

    const min = (typeof threshold?.min === 'number') ? threshold.min : null;
    const max = (typeof threshold?.max === 'number') ? threshold.max : null;

    if (!max || !min) return null;

    const direction = (value == null)
        ? null
        : max && value > max
            ? 'high'
            : min && value < min
                ? 'low'
                : null;

    if (!direction) return null;

    let deviation = 0;

    if (direction === 'high') {
        deviation = value - max;
    }

    if (direction === 'low') {
        deviation = min - value;
    }

    const timestamp = Date.now();

    const id = `${metricKey}-${timestamp}`;

    return {
        id,
        metricKey,
        label,
        unit,
        value,
        threshold,
        deviation,
        direction,
        timestamp,
    };
}

export const generateAlerts = (vitals) => {
    const alerts = [];

    const recurse = (metricKey, value) => {
        if (value === null || value === undefined) return;

        if (typeof value === 'object' && !Array.isArray(value)) {
            Object.entries(value).forEach(([subKey, subValue]) => {
                recurse(subKey, subValue);
            });
        } else {
            const alert = createAlert(metricKey, value);
            if (alert) alerts.push(alert);
        }
    };

    Object.entries(vitals).forEach(([metricKey, value]) => {
        recurse(metricKey, value);
    });

    return alerts;
}

export const formatAlertMessage = (alert) => {
    const { label, value, unit, direction, deviation } = alert;

    if (!direction) return null;

    const dirArrow = direction === 'high' ? '↑' : '↓';

    return `${label} ${value} ${unit} - ${direction === 'high' ? 'above' : 'below'} ${dirArrow} normal by ${deviation}`;
};
