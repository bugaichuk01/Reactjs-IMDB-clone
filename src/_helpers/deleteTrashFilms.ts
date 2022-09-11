import {IMovie} from "../types/IMovie";

export const deleteTrashFilms = (data: IMovie[] | undefined) => {
    return data && data.filter(item => item.nameOriginal != null).slice(0, 10)
}