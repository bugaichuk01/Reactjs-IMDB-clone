import React from 'react';
import {IMovie} from "../../_types/IMovie";
import styles from './FilmItem.module.scss'

interface FilmItemProps {
    item: IMovie
}

export const FilmItem: React.FC<FilmItemProps> = ({item}) => {

    return (
        <li className={styles['list-item']}>
            <img src={item.posterUrl} alt=""/>
            <div className={styles['rating-group']}>
            <span className="ipc-rating-star ipc-rating-star--baseAlt ipc-rating-star--imdb">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className={styles.icon}
                     id="iconContext-star-inline"
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     role="presentation">
                    <path
                        d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"/>
            </svg>
                <span className={styles.rating}>
                    {item.ratingKinopoisk}
                </span>
            </span>
            </div>
            <span className={styles.name}>{item.nameRu}</span>
        </li>
    );
}