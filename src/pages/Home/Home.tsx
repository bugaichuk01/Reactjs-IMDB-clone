import React from 'react';
import {Layout} from "../../components/Layout/Layout";
import {useGetNewFilmsQuery, useGetNewSeriesQuery} from "../../_services/serviceAPI";
import {Recommendations} from "../../components/Recommendations/Recommendations";

export const Home = () => {
    const films = useGetNewFilmsQuery();
    const series = useGetNewSeriesQuery();

    return (
        <Layout>
            <Recommendations data={films.data} title={'Новые фильмы'} />
            <Recommendations data={series.data} title={'Новые сериалы'} />
        </Layout>
    );
}