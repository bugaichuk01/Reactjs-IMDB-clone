import React from 'react';
import {Layout} from "../../components/Layout/Layout";
import {useGetNewFilmsQuery, useGetNewSeriesQuery, useGetPremiersQuery} from "../../_services/serviceAPI";
import {Popular} from "../../components/Popular/Popular";
import {FilmsGroup} from "../../components/FilmsGroup/FilmsGroup";

export const Home = () => {
    const films = useGetNewFilmsQuery();
    const series = useGetNewSeriesQuery();
    const premiers = useGetPremiersQuery();

    return (
        <Layout>
            {/*
            <Popular data={films.data} title={'Популярные фильмы текущего года'}/>
            <Popular data={series.data} title={'Популярные сериалы текущего года'}/>
            */}
            <FilmsGroup data={premiers.data} title='Цифровые релизы этого месяца'/>
        </Layout>
    );
}