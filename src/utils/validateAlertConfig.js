export const validateAlertConfig = (metricKey, config) => {
    if (!config || typeof config !== 'object') {
        throw new Error(`Missing config for "${metricKey}"`);
    }

    const {
        label, unit, threshold,
        severityScale, colors
    } = config;

    if (typeof label !== 'string') {
        throw new Error(`Invalid "label" in config for "${metricKey}"`);
    }

    if (typeof unit !== 'string') {
        throw new Error(`Invalid "unit" in config for "${metricKey}"`);
    }

    if (!threshold || typeof threshold !== 'object') {
        throw new Error(`Missing "threshold" in config for "${metricKey}"`);
    }

    if (typeof threshold.min !== 'number' || typeof threshold.max !== 'number') {
        throw new Error(`Invalid threshold values in config for "${metricKey}"`);
    }

    if (!severityScale || typeof severityScale !== 'object') {
        throw new Error(`Missing "severityScale" in config for "${metricKey}"`);
    }

    if (typeof severityScale.min !== 'number' ||
        typeof severityScale.max !== 'number' ||
        typeof severityScale.stepUp !== 'number' ||
        typeof severityScale.stepDown !== 'number') {
        throw new Error(`Invalid severityScale in config for "${metricKey}"`);
    }

    if (!colors || typeof colors !== 'object') {
        throw new Error(`Missing or invalid "colors" for "${metricKey}"`);
    }

    ['up', 'down'].forEach(dir => {
        if (!colors[dir] || typeof colors[dir] !== 'object') {
            throw new Error(`Missing colors for direction "${dir}" in "${metricKey}"`);
        }

        if (typeof colors[dir].base !== 'string' ||
            typeof colors[dir].extreme !== 'string') {
            throw new Error(`Invalid color values for direction "${dir}" in "${metricKey}"`);
        }
    });
};
