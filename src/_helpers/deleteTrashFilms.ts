import {IFilm} from "../types/IFilm";

export const deleteTrashFilms = (data?: IFilm[]) => {
    return data?.filter(item => item.nameOriginal != null)
}