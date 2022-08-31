import React from 'react';
import {IMovie} from "../../_types/IMovie";
import styles from './FilmItem.module.scss'
import cn from 'classnames';

interface FilmItemProps {
    item: IMovie
}

export const FilmItem: React.FC<FilmItemProps> = ({item}) => {

    return (
        <li className={styles['list-item']}>
            <img src={item.posterUrl} alt=""/>
            <div className={styles['rating-group']}>
                <i className={cn(styles.icon, "fa fa-star")} aria-hidden="true" />
                <span className={styles.rating}>
                    {item.ratingKinopoisk}
                </span>
            </div>
            <span className={styles.name}>{item.nameRu}</span>
        </li>
    );
}