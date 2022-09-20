import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getCurrentYear} from "../_helpers/getCurrentYear";
import {getCurrentMonth} from "../_helpers/getCurrentMonth";
import {IMovie} from "../types/IMovie";
import {IBaseItems, ISearchQuery} from "../types/IQuery";
import {IStaff} from "../types/IStaff";
import {IBoxOffice} from "../types/IBoxOffice";
import {IFact} from "../types/IFact";
import {ISimilar} from "../types/ISimilar";

export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_URL}`}),
    endpoints: build => ({
        getFilmById: build.query<IMovie, number | undefined>({
            query: (id) => ({
                url: `/v2.2/films/${id}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPopularFilms: build.query<IBaseItems<IMovie>, void>({
            query: () => ({
                url: `/v2.2/films?type=FILM&order=NUM_VOTE&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPopularSeries: build.query<IBaseItems<IMovie>, void>({
            query: () => ({
                url: `/v2.2/films?type=TV_SERIES&order=NUM_VOTE&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPremiers: build.query<IBaseItems<IMovie>, void>({
            query: () => ({
                url: `/v2.2/films/premieres?year=${getCurrentYear()}&month=${getCurrentMonth()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getTopAwaitFilms: build.query<IBaseItems<IMovie>, void>({
            query: () => ({
                url: `/v2.2/films/top?type=TOP_AWAIT_FILMS`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPopularMiniSeries: build.query<IBaseItems<IMovie>, void>({
            query: () => ({
                url: `/v2.2/films?order=NUM_VOTE&type=MINI_SERIES&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getTopFilms: build.query<IBaseItems<IMovie>, void>({
            query: () => ({
                url: `/v2.2/films/top?type=TOP_250_BEST_FILMS`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getFilmsBySearch: build.query<IBaseItems<IMovie>, ISearchQuery>({
            query: ({type, keyword}) => ({
                url: `/v2.2/films?type=${type}&keyword=${keyword}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getImages: build.query<IMovie, number | undefined>({
            query: (id) => ({
                url: `/v2.2/films/${id}/images?type=STILL`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getBoxOffice: build.query<IBaseItems<IBoxOffice>, number | undefined>({
            query: (id) => ({
                url: `/v2.2/films/${id}/box_office`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getActors: build.query<IStaff[], number | undefined>({
            query: (id) => ({
                url: `v1/staff?filmId=${id}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getFacts: build.query<IBaseItems<IFact>, number | undefined>({
            query: (id) => ({
                url: `/v2.2/films/${id}/facts`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getSimilar: build.query<IBaseItems<ISimilar>, number | undefined>({
            query: (id) => ({
                url: `/v2.2/films/${id}/similars`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
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
} = serviceAPI


