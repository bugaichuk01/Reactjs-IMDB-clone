export interface IFilmTop {
    filmId: number;
    nameRu?: string;
    nameEn?: string;
    year?: string;
    filmLength?: string;
    countries: { country: string }[];
    genres: { genre: string }[];
    rating?: number;
    ratingVoteCount?: number;
    posterUrl: string;
    posterUrlPreview: string;
}