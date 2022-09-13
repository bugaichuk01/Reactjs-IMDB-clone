import React from 'react';
import {Layout} from "../../components/Layout/Layout";
import {Popular} from "../../components/Popular/Popular";
import {Recommendations} from "../../components/Recommendations/Recommendations";
import {useGetPopularFilmsQuery, useGetPopularSeriesQuery} from "../../_services/serviceAPI";

export const Home = () => {
    const films = useGetPopularFilmsQuery();
    const series = useGetPopularSeriesQuery();

    return (
        <Layout>
            <Popular data={films.data} title='Популярные фильмы текущего года'/>
            <Recommendations/>
            <Popular data={series.data} title='Популярные сериалы текущего года'/>
        </Layout>
    );
}