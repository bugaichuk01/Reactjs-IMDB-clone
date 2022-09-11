export interface IMovie {
    completed?: boolean;
    countries: { country: string }[];
    coverUrl?: string;
    description?: string;
    editorAnnotation?: string;
    endYear?: number;
    filmLength?: number;
    genres: { genre: string }[];
    has3D?: boolean;
    hasImax?: boolean;
    imdbId?: string;
    isTicketsAvailable: boolean;
    kinopoiskId: number;
    lastSync: string;
    logoUrl?: string;
    nameEn?: string;
    nameOriginal?: string;
    nameRu?: string;
    posterUrl: string;
    posterUrlPreview: string;
    productionStatus?: string;
    ratingAgeLimits?: string;
    ratingAwait?: number;
    ratingAwaitCount?: number;
    ratingFilmCritics?: number;
    ratingFilmCriticsVoteCount?: number;
    ratingGoodReview?: number;
    ratingGoodReviewVoteCount?: number;
    ratingImdb?: number;
    ratingImdbVoteCount?: number;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount?: number;
    ratingMpaa?: string;
    ratingRfCritics?: number;
    ratingRfCriticsVoteCount?: number;
    reviewsCount: number;
    serial?: boolean;
    shortDescription?: string;
    shortFilm?: boolean;
    slogan?: string;
    startYear?: number;
    type: string;
    webUrl: string;
    year?: number;
}

export interface IMovies {
    items: IMovie[];
    total: number;
    totalPage: number;
}
