import React from 'react';
import styles from './FilmItem.module.scss'
import {IMovie} from "../../types/IMovie";
import {FaStar} from "react-icons/fa";
import {Bookmark} from "../UI/Bookmark/Bookmark";
import {WatchlistButton} from "../UI/WatchListButton/WatchlistButton";

interface FilmItemProps {
    item: IMovie
}

export const FilmItem: React.FC<FilmItemProps> = ({item}) => {
    return (
        <li className={styles.list_item}>
            <img className={styles.image} src={item.posterUrl} alt=""/>
            <Bookmark />
            <div className={styles.bottom}>
                <div className={styles.rating_group}>
                    <FaStar className={styles.icon}/>
                    <span className={styles.rating}>{item.ratingKinopoisk}</span>
                </div>
                <span className={styles.name}>{item.nameRu}</span>
                <WatchlistButton />
            </div>
        </li>
    );
}