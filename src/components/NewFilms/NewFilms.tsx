import React, {useEffect, useState} from 'react';
import {useGetNewFilmsQuery} from "../../_services/serviceAPI";
import {IMovie} from "../../types/IMovie";
import styles from './NewFilms.module.scss'
import cn from 'classnames';
import {FilmItem} from "../FilmItem/FilmItem";

export const NewFilms = () => {
    const {data} = useGetNewFilmsQuery();
    const [newFilms, setNewFilms] = useState<IMovie[]>([]);

    useEffect(() => {
        data?.items && setNewFilms(data.items.slice(0, 10));
    }, [data])

    return (
        <>
            <div className={cn('container', styles.container)}>
                <ul className={cn("list", styles.grid)}>
                    {newFilms?.map((item) => (
                        <FilmItem key={item.imdbId} item={item}/>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default NewFilms;