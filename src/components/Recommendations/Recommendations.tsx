import React from 'react';
import {Slider} from "../Slider/Slider";
import {
    useGetPopularMiniSeriesQuery,
    useGetTopFilmsQuery,
    useGetPremiersQuery,
    useGetTopAwaitFilmsQuery
} from "../../_services/serviceAPI";
import {FilmsGroup} from "../FilmsGroup/FilmsGroup";
import {FilmsTitle} from "../FilmsTitle/FilmsTitle";
export const Recommendations = () => {

    const premiers = useGetPremiersQuery();
    const topAwait = useGetTopAwaitFilmsQuery();
    const miniSeries = useGetPopularMiniSeriesQuery();
    const topFilms = useGetTopFilmsQuery();

    const filmsGroup = [
        {element: <FilmsGroup data={premiers?.data?.items} title='Кинопремьеры этого месяца'/>},
        {element: <FilmsGroup data={topAwait?.data?.films} title='Топ ожидаемых фильмов'/>},
        {element: <FilmsGroup data={miniSeries?.data?.items} title='Популярные мини-сериалы этого года'/>},
        {element: <FilmsGroup data={topFilms?.data?.films} title='Топ 250 фильмов'/>}
    ]

    return (
        <div className='container'>
            <FilmsTitle title='Интересное' description='Подборка редакции' info='Премьеры, популярное и цифровые релизы' />
            <Slider itemsNumber={3} data={filmsGroup.map(group => group.element)}/>
        </div>
    );
}

