export function getMonthRange(year, month) {
    const start = new Date(year, month - 1, 1)
    const end = new Date(year, month, 1, 0, 0, -1)

    return {
        start: start.toISOString().slice(0, -1),
        end: end.toISOString().slice(0, -1)
    }
}
