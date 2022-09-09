import {IMovie} from "../types/IMovie";

export const deleteTrashFilms = (films: IMovie[] | undefined) => {
    const array: IMovie[] = [];
    for (let i = 0; array.length !== 10; i++) {
        if (films && (films[i].nameOriginal !== null || '')) array.push(films[i])}
    return array;
}