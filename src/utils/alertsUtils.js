import { ALERT_CONFIG } from '../constants';
import { calculateColor } from './colorUtils';
import { validateAlertConfig } from './validateAlertConfig';

export const createAlert = (metricKey, current, previous, isNightMode = false) => {
    const config = ALERT_CONFIG[metricKey];
    if (!config) return null;

    validateAlertConfig(metricKey, config);
    if (current == null || previous == null) return null;

    const { label, unit, threshold, severityScale, isSuppressedAtNight, colors } = config;
    if (isNightMode && isSuppressedAtNight) return null;

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
        previous,
        threshold,
        deviation,
        direction,
        level,
        color,
        timestamp,
    };
}

export const generateAlerts = (vitals, previousVitals, isNightMode) => {
    return Object.keys(vitals)
        .map(field =>
            createAlert(field, vitals[field], previousVitals[field], isNightMode)
        )
        .filter(Boolean);
}
