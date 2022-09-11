import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IMovie, IMovies} from "../types/IMovie";
import {getCurrentYear} from "../_helpers/getCurrentYear";
import {ISearchQuery} from "../types/IQuery";

export const serviceAPI = createApi({
    reducerPath: 'serviceAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_URL}`}),
    endpoints: build => ({
        getFilmById: build.query<IMovie, string>({
            query: (id) => ({
                url: `/films/${id}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY}`
                }
            })
        }),
        getNewFilms: build.query<IMovies, void>({
            query: () => ({
                url: `/films?type=FILM&order=NUM_VOTE&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY}`
                }
            })
        }),
        getNewSeries: build.query<IMovies, void>({
            query: () => ({
                url: `/films?type=TV_SERIES&order=NUM_VOTE&yearFrom=${getCurrentYear()}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY}`
                }
            })
        }),
        getPremiers: build.query<IMovies, void>({
            query: () => ({
                url: `/films/top?type=TOP_AWAIT_FILMS`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY}`
                }
            })
        }),
        getFilmsBySearch: build.query<IMovies, ISearchQuery>({
            query: ({type, keyword}) => ({
                url: `/films?type=${type}&keyword=${keyword}`,
                headers: {
                    'X-API-KEY': `${process.env.REACT_APP_API_KEY}`
                }
            })
        })
    })
})
export const {
    useGetFilmByIdQuery,
    useGetNewFilmsQuery,
    useGetNewSeriesQuery,
    useGetFilmsBySearchQuery,
    useGetPremiersQuery,
} = serviceAPI


