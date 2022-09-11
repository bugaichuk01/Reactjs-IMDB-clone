import React from 'react';
import {Layout} from "../../components/Layout/Layout";
import {useGetNewFilmsQuery, useGetNewSeriesQuery} from "../../_services/serviceAPI";
import {Recommendations} from "../../components/Recommendations/Recommendations";

export const Home = () => {
    const films = useGetNewFilmsQuery();
    const series = useGetNewSeriesQuery();

    return (
        <Layout>
            <Recommendations data={films.data} title={'Популярные фильмы текущего года'} />
            <Recommendations data={series.data} title={'Популярные сериалы текущего года'} />
        </Layout>
    );
}