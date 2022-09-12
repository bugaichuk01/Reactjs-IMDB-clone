import React from 'react';
import {IMovie} from "../../types/IMovie";
import styles from './FilmItem.module.scss'
import {FaStar} from "react-icons/fa";
import {UIWatchListButton} from "../UI/UIWatchListButton/UIWatchListButton";
import {UIFlag} from "../UI/UIFlag/UIFlag";

interface FilmItemProps {
    item: IMovie
}

export const FilmItem: React.FC<FilmItemProps> = ({item}) => {
    return (
        <li className={styles.list_item}>
            <img className={styles.image} src={item.posterUrl} alt=""/>
            <UIFlag />
            <div className={styles.bottom}>
                <div className={styles.rating_group}>
                    <FaStar className={styles.icon}/>
                    <span className={styles.rating}>{item.ratingKinopoisk}</span>
                </div>
                <span className={styles.name}>{item.nameRu}</span>
                <UIWatchListButton />
            </div>
        </li>
    );
}