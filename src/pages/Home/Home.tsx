import React from 'react';
import {Layout} from "../../components/Layout/Layout";
import {NewFilms} from "../../components/Recommendations/NewFilms";
import {NewSeries} from "../../components/Recommendations/NewSeries";

export const Home = () => {
    return (
        <Layout>
            <NewFilms />
            <NewSeries />
        </Layout>
    );
}

export default Home;