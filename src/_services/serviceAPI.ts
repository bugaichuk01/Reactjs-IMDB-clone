import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getCurrentYear} from "../_helpers/getCurrentYear";
import {getCurrentMonth} from "../_helpers/getCurrentMonth";
import {IMovie, IMovies} from "../types/IMovie";
import {ISearchQuery} from "../types/IQuery";

export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_URL}`}),
    endpoints: build => ({
        getFilmById: build.query<IMovie, string>({
            query: (id) => ({
                url: `/films/${id}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPopularFilms: build.query<IMovies, void>({
            query: () => ({
                url: `/films?type=FILM&order=NUM_VOTE&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPopularSeries: build.query<IMovies, void>({
            query: () => ({
                url: `/films?type=TV_SERIES&order=NUM_VOTE&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPremiers: build.query<IMovies, void>({
            query: () => ({
                url: `/films/premieres?year=${getCurrentYear()}&month=${getCurrentMonth()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getTopAwaitFilms: build.query<IMovies, void>({
            query: () => ({
                url: `/films/top?type=TOP_AWAIT_FILMS`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getPopularMiniSeries: build.query<IMovies, void>({
            query: () => ({
                url: `/films?order=NUM_VOTE&type=MINI_SERIES&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getTopFilms: build.query<IMovies, void>({
            query: () => ({
                url: `/films/top?type=TOP_250_BEST_FILMS`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        }),
        getFilmsBySearch: build.query<IMovies, ISearchQuery>({
            query: ({type, keyword}) => ({
                url: `/films?type=${type}&keyword=${keyword}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY_SECOND}`
                }
            })
        })
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
    useGetTopFilmsQuery
} = serviceAPI


