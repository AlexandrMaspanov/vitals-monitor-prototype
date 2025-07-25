const cache = new Map();

export const calculateColor = (level, maxLevel, baseColor, extremeColor) => {
    const key = `${level}|${maxLevel}|${baseColor}|${extremeColor}`;
    if (cache.has(key)) return cache.get(key);

    const hexToRGB = (hex) => {
        return hex.slice(1).match(/.{2}/g).map(c => parseInt(c, 16));
    }

    const blend = (a, b, ratio) => {
        return Math.round(a + (b - a) * Math.min(Math.max(ratio, 0), 1));
    }

    const [r1, g1, b1] = hexToRGB(baseColor);
    const [r2, g2, b2] = hexToRGB(extremeColor);
    const ratio = level / maxLevel;

    const r = blend(r1, r2, ratio);
    const g = blend(g1, g2, ratio);
    const b = blend(b1, b2, ratio);

    const result = `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
    cache.set(key, result);
    return result;
};
