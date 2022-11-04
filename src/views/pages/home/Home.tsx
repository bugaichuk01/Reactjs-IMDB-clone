import React from 'react';
import {Popular} from "../../components/home/popular/Popular";
import {Recommendations} from "../../components/home/recommendations/Recommendations";
import {useGetPopularFilmsQuery, useGetPopularSeriesQuery} from "_/serviceAPI";

export const Home = () => {
    const films = useGetPopularFilmsQuery();
    const series = useGetPopularSeriesQuery();

    return (
        <>
            <Popular data={films.data} title='Новинки' description='Популярные фильмы текущего года'/>
            <Recommendations/>
            <Popular data={series.data} title='Что посмотреть' description='Популярные сериалы текущего года'/>
        </>
    );
}