export const convertAgeLimit = (age: string | undefined) => {
    return age?.slice(3) + '+';
}