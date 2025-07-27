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
