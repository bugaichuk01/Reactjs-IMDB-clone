import React from 'react';
import styles from './PopularItem.module.scss';
import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
import {IFilmTop} from "../../../types/IFilmTop";
import {EnumInfo} from "@/shared-components/enum-info/EnumInfo";

interface IPopularItem {
    item: IFilmTop;
}

export const PopularItem: React.FC<IPopularItem> = ({item}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link to={`/film/${item.filmId}`}>
                    <span className={styles.imageContainer}>
                        <img src={item.posterUrl} alt={item.nameRu}/>
                    </span>
                </Link>
                <div className={styles.info}>
                    <Link to={`/film/${item.filmId}`}>
                        <span className={styles.title}>
                            {item.nameRu ? item.nameRu : item.nameEn ? item.nameEn : 'Без названия'} ({item.year})
                        </span>
                        <EnumInfo>
                            {item.genres.map((genre) => (
                                <li className={styles.genre}>{genre.genre}</li>
                            ))}
                        </EnumInfo>
                    </Link>
                    <span className={styles.desc}>
                        <span className={styles.icon}>
                            <FaStar/>
                        </span>
                        {Number(item.rating) < 10 ? item.rating : '-'} / 10
                    </span>
                </div>
            </div>
        </div>
    );
};

