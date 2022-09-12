import React from 'react';
import styles from './Recommendations.module.scss';
import {Slider} from "../Slider/Slider";
import {
    useGetPopularMiniSeriesQuery,
    useGetTopFilmsQuery,
    useGetPremiersQuery,
    useGetTopAwaitFilmsQuery
} from "../../_services/serviceAPI";
import {FilmsGroup} from "../FilmsGroup/FilmsGroup";
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
            <h3 className={styles.title}>Интересное</h3>
            <h3 className={styles.editors_pick} style={{color: 'white', textAlign: 'start'}}>Подборка редакции</h3>
            <Slider itemsNumber={3} data={filmsGroup.map(group => group.element)}/>
        </div>
    );
}

