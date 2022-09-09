export function slicer(string: string | undefined, range: number) {
    return string && string.length >= range ? string.slice(0, range) + '...' : string;
}