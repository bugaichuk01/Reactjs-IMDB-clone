import React from 'react';
import {FilmsGroup} from "../films-group/FilmsGroup";
import {Slider} from "@/shared-components/slider/Slider";
import {Caption} from "@/shared-components/caption/Caption";
import {
    useGetPopularMiniSeriesQuery,
    useGetBestFilmsQuery,
    useGetPremiersQuery,
    useGetTopAwaitFilmsQuery
} from "_/serviceAPI";

export const Recommendations = () => {

    const premiers = useGetPremiersQuery();
    const topAwait = useGetTopAwaitFilmsQuery(1);
    const miniSeries = useGetPopularMiniSeriesQuery();
    const topFilms = useGetBestFilmsQuery(1);

    const filmsGroup = [
        {element: <FilmsGroup data={premiers?.data?.items} title='Кинопремьеры этого месяца'/>},
        {element: <FilmsGroup data={miniSeries?.data?.items} title='Популярные мини-сериалы этого года'/>},
        {element: <FilmsGroup data={topFilms?.data?.films} title='Топ 250 фильмов'/>},
        {element: <FilmsGroup data={topAwait?.data?.films} title='Топ ожидаемых фильмов'/>}
    ]

    return (
        <>
            <Caption title='Интересное' description='Подборка редакции' info='Премьеры, популярное и цифровые релизы' />
            <Slider isRec={true} data={filmsGroup.map(group => group.element)}/>
        </>
    );
}

