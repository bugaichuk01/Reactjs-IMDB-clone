import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IMovie, IMovies} from "../_types/IMovie";
import {getCurrentYear} from "../_helpers/getCurrentYear";
import {ISearchQuery} from "../_types/IQuery";

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
    useGetFilmsBySearchQuery
} = serviceAPI


