import { ALERT_CONFIG } from '../constants';
import { calculateColor } from './colorUtils';
import { validateAlertConfig } from './validateAlertConfig';

export const createAlert = (metricKey, current) => {
    const config = ALERT_CONFIG[metricKey];
    if (!config) return null;

    validateAlertConfig(metricKey, config);
    if (current == null) return null;

    const { label, unit, threshold, severityScale, colors } = config;

    const direction =
        current > threshold.max ? 'up' :
            current < threshold.min ? 'down' : null;

    if (!direction) return null;

    let level = 0;
    let deviation = 0;
    let maxLevel = 0;

    if (direction === 'up') {
        maxLevel = Math.floor((severityScale.max - threshold.max) / severityScale.stepUp);
        deviation = current - threshold.max;
        level = Math.min(maxLevel, Math.floor(deviation / severityScale.stepUp));
    }

    if (direction === 'down') {
        maxLevel = Math.floor((threshold.min - severityScale.min) / severityScale.stepDown);
        deviation = threshold.min - current;
        level = Math.min(maxLevel, Math.floor(deviation / severityScale.stepDown));
    }

    const color = calculateColor(level, maxLevel, colors[direction].base, colors[direction].extreme);

    const timestamp = Date.now();

    const id = `${metricKey}-${timestamp}`;

    return {
        id,
        metricKey,
        label,
        unit,
        current,
        threshold,
        deviation,
        direction,
        level,
        color,
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
    const { label, current, unit, direction, deviation } = alert;

    if (!direction) return null;

    const dirArrow = direction === 'up' ? '↑' : '↓';

    return `${label} ${current} ${unit} - ${direction === 'up' ? 'above' : 'below'} ${dirArrow} normal by ${deviation}`;
};
