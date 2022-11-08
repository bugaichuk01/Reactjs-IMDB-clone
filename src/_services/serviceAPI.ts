import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getCurrentYear} from "_/getCurrentYear";
import {getCurrentMonth} from "_/getCurrentMonth";
import {IFact} from "../types/IFact";
import {IMovie} from "../types/IMovie";
import {IStaff} from "../types/IStaff";
import {IReview} from "../types/IReview";
import {ISimilar} from "../types/ISimilar";
import {IBoxOffice} from "../types/IBoxOffice";
import {IBaseQuery, IParams, ISearchQuery} from "../types/IQuery";

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
        getFilmById: build.query<IMovie, number | undefined>({
            query: (id) => `/v2.2/films/${id}`
        }),
        getPopularFilms: build.query<IBaseQuery<IMovie>, void>({
            query: () => `/v2.2/films?type=FILM&order=NUM_VOTE&yearFrom=${getCurrentYear()}`
        }),
        getPopularSeries: build.query<IBaseQuery<IMovie>, void>({
            query: () => `/v2.2/films?type=TV_SERIES&order=NUM_VOTE&yearFrom=${getCurrentYear()}`
        }),
        getPremiers: build.query<IBaseQuery<IMovie>, void>({
            query: () => `/v2.2/films/premieres?year=${getCurrentYear()}&month=${getCurrentMonth()}`
        }),
        getTopAwaitFilms: build.query<IBaseQuery<IMovie>, void>({
            query: () => `/v2.2/films/top?type=TOP_AWAIT_FILMS`
        }),
        getPopularMiniSeries: build.query<IBaseQuery<IMovie>, void>({
            query: () => `/v2.2/films?order=NUM_VOTE&type=MINI_SERIES&yearFrom=${getCurrentYear()}`
        }),
        getTopFilms: build.query<IBaseQuery<IMovie>, void>({
            query: () => `/v2.2/films/top?type=TOP_250_BEST_FILMS`
        }),
        getFilmsBySearch: build.query<IBaseQuery<IMovie>, ISearchQuery>({
            query: ({type, keyword}) => `/v2.2/films?type=${type}&keyword=${keyword}`
        }),
        getImages: build.query<IMovie, number | undefined>({
            query: (id) => `/v2.2/films/${id}/images?type=STILL`
        }),
        getBoxOffice: build.query<IBaseQuery<IBoxOffice>, number | undefined>({
            query: (id) => `/v2.2/films/${id}/box_office`
        }),
        getActors: build.query<IStaff[], number | undefined>({
            query: (id) => `v1/staff?filmId=${id}`
        }),
        getFacts: build.query<IBaseQuery<IFact>, number | undefined>({
            query: (id) => `/v2.2/films/${id}/facts`
        }),
        getSimilar: build.query<IBaseQuery<ISimilar>, number | undefined>({
            query: (id) => `/v2.2/films/${id}/similars`
        }),
        getReviews: build.query<IBaseQuery<IReview>, IParams>({
            query: ({id, text = 'DATE_DESC', page = 1}) => `/v2.2/films/${id}/reviews?order=${text}&page=${page}`
        }),
    })
})

export const {
    useGetFilmByIdQuery,
    useGetFilmsBySearchQuery,
    useGetPopularFilmsQuery,
    useGetPopularSeriesQuery,
    useGetPremiersQuery,
    useGetTopAwaitFilmsQuery,
    useGetPopularMiniSeriesQuery,
    useGetTopFilmsQuery,
    useGetImagesQuery,
    useGetBoxOfficeQuery,
    useGetActorsQuery,
    useGetFactsQuery,
    useGetSimilarQuery,
    useGetReviewsQuery,
} = serviceAPI


