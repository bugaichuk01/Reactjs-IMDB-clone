export function getTimeFromMinutes(totalMinutes: number | undefined) {
    return totalMinutes && Math.floor(totalMinutes / 60) + 'ч : ' + totalMinutes % 60 + 'мин';
}