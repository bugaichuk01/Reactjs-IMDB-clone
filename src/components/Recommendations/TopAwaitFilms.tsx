import React from 'react';
import {useGetNewSeriesQuery} from "../../_services/serviceAPI";
import styles from './NewFilms.module.scss'
import cn from 'classnames';
import {FilmItem} from "../FilmItem/FilmItem";

export const TopAwaitFilms = () => {
    const {data} = useGetNewSeriesQuery();

    return (
        <>
            <div className={cn('container', styles.container)}>
                <ul className={cn("list", styles.grid)}>
                    {data?.items.slice(0, 10).map((item) => (
                        <FilmItem key={item.imdbId} item={item}/>
                    ))}
                </ul>
            </div>
        </>
    );
}