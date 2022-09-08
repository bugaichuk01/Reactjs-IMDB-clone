import React from 'react';
import {Layout} from "../../components/Layout/Layout";
import {NewFilms} from "../../components/Recommendations/NewFilms";
import {TopAwaitFilms} from "../../components/Recommendations/TopAwaitFilms";

export const Home = () => {
    return (
        <Layout>
            <NewFilms />
            <TopAwaitFilms />
        </Layout>
    );
}

export default Home;