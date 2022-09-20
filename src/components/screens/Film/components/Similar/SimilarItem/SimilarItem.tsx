import React from 'react';
import styles from './SimilarItem.module.scss'
import {Link} from "react-router-dom";
import {ISimilar} from "../../../../../../types/ISimilar";

interface FilmItemProps {
    item: ISimilar
}

export const SimilarItem: React.FC<FilmItemProps> = ({item}) => {

    return (
        <li className={styles.list_item}>
            <Link to={`/film/${item.filmId}`}>
                <img className={styles.image} src={item.posterUrl} alt={item.nameOriginal}/>
            </Link>
            <div className={styles.bottom}>
                <span className={styles.name}>{item.nameRu}</span>
            </div>
        </li>
    );
}