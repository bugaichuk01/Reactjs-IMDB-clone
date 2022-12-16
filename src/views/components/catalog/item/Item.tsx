import React from 'react';
import {IFilm} from "../../../../types/IFilm";
import styles from './Item.module.scss';
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";

interface IItem {
    item: IFilm
}

export const Item: React.FC<IItem> = ({item}) => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link to={`/film/${item.kinopoiskId}`}>
                    <span className={styles.imageContainer}>
                       <img src={item.posterUrl} alt={item.nameRu}/>
                    </span>
                </Link>
                <div className={styles.info}>
                    <Link to={`/film/${item.kinopoiskId}`}>
                        <span
                            className={styles.title}>{item.nameRu ? item.nameRu : item.nameEn ? item.nameEn : 'Без названия'} ({item.year})</span>
                    </Link>
                    <span className={styles.desc}>
                        <span className={styles.icon}>
                            <FaStar />
                        </span>
                        {item.ratingImdb ? item.ratingImdb :  '-'} / 10
                    </span>
                </div>
            </div>
        </div>
    );
};

