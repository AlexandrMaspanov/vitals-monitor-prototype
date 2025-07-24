export function arraysEqual(arrFirst, arrSecond) {
    if (arrFirst.length !== arrSecond.length) return false;
    return arrFirst.every((value, idx) => value === arrSecond[idx]);
}
