import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getCurrentYear} from "_/getCurrentYear";
import {getCurrentMonth} from "_/getCurrentMonth";
import {IFact} from "../types/IFact";
import {IFilm} from "../types/IFilm";
import {IStaff} from "../types/IStaff";
import {ISimilar} from "../types/ISimilar";
import {IBoxOffice} from "../types/IBoxOffice";
import {IQueryParams, ISearchQuery} from "../types/IQuery";
import {IBaseResponse, IFilmTopResponse, IReviewResponse} from "../types/Responses";
import {IActor} from "../types/IActor";

export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}`,
        prepareHeaders: headers => {
            headers.set('X-API-KEY', `${process.env.REACT_APP_API_KEY}`)
            headers.set('Access-Control-Allow-Origin', '*')
            headers.set('Access-Control-Allow-Credentials', 'true')
            headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            headers.set('X-API-KEY', `${process.env.REACT_APP_API_KEY}`)
            return headers
        }
    }),
    endpoints: build => ({
        getFilmById: build.query<IFilm, number | undefined>({
            query: (id) => `/v2.2/films/${id}`
        }),
        getFilms: build.query<IBaseResponse<IFilm>, IQueryParams>({
            query: ({page, order, type, keyword, genre}) => `/v2.2/films?type=${type}&page=${page}&order=${order}&keyword=${keyword}&genres=${genre}`
        }),
        getPopularFilms: build.query<IBaseResponse<IFilm>, void>({
            query: () => `/v2.2/films?type=FILM&order=NUM_VOTE&yearFrom=${getCurrentYear()}`
        }),
        getPopularSeries: build.query<IBaseResponse<IFilm>, void>({
            query: () => `/v2.2/films?type=TV_SERIES&order=NUM_VOTE&yearFrom=${getCurrentYear()}`
        }),
        getPremiers: build.query<IBaseResponse<IFilm>, void>({
            query: () => `/v2.2/films/premieres?year=${getCurrentYear()}&month=${getCurrentMonth()}`
        }),
        getBestFilms: build.query<IFilmTopResponse, number | undefined>({
            query: (page) => `/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`
        }),
        getTopPopularFilms: build.query<IFilmTopResponse, number | undefined>({
            query: (page) => `/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`
        }),
        getTopAwaitFilms: build.query<IFilmTopResponse, number | undefined>({
            query: (page) => `/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${page}`
        }),
        getPopularMiniSeries: build.query<IBaseResponse<IFilm>, void>({
            query: () => `/v2.2/films?order=NUM_VOTE&type=MINI_SERIES&yearFrom=${getCurrentYear()}`
        }),
        getFilmsBySearch: build.query<IBaseResponse<IFilm>, ISearchQuery>({
            query: ({type, keyword}) => `/v2.2/films?type=${type}&keyword=${keyword}`
        }),
        getBoxOffice: build.query<IBaseResponse<IBoxOffice>, number | undefined>({
            query: (id) => `/v2.2/films/${id}/box_office`
        }),
        getActors: build.query<IStaff[], number | undefined>({
            query: (id) => `v1/staff?filmId=${id}`
        }),
        getFacts: build.query<IBaseResponse<IFact>, number | undefined>({
            query: (id) => `/v2.2/films/${id}/facts`
        }),
        getSimilar: build.query<IBaseResponse<ISimilar>, number | undefined>({
            query: (id) => `/v2.2/films/${id}/similars`
        }),
        getReviews: build.query<IReviewResponse, IQueryParams>({
            query: ({id, text = 'DATE_DESC', page = 1}) => `/v2.2/films/${id}/reviews?order=${text}&page=${page}`
        }),
        getActor: build.query<IActor, number>({
            query: (id) => `/v1/staff/${id}`
        }),
    })
})

export const {
    useGetFilmByIdQuery,
    useGetFilmsQuery,
    useGetFilmsBySearchQuery,
    useGetPopularFilmsQuery,
    useGetPopularSeriesQuery,
    useGetPremiersQuery,
    useGetTopAwaitFilmsQuery,
    useGetTopPopularFilmsQuery,
    useGetBestFilmsQuery,
    useGetPopularMiniSeriesQuery,
    useGetBoxOfficeQuery,
    useGetActorsQuery,
    useGetFactsQuery,
    useGetSimilarQuery,
    useGetReviewsQuery,
    useGetActorQuery,
} = serviceAPI


