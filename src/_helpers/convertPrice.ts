export const converPrice = (price: number | undefined) => {
    return String(price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}