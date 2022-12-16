import {IFilmTop} from "./IFilmTop";
import {IReview} from "./IReview";

export interface IBaseResponse<T> {
    items: T[];
    total: number;
    totalPages?: number;
}

export interface IFilmTopResponse {
    films: IFilmTop[];
    pagesCount: number;
}

export interface IReviewResponse {
    totalPositiveReviews: number;
    totalPages: number;
    totalNeutralReviews: number;
    totalNegativeReviews: number;
    total: number;
    items: IReview[];
}