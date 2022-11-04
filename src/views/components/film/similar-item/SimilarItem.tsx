import React from 'react';
import {Link} from "react-router-dom";
import styles from './SimilarItem.module.scss'
import {ISimilar} from "../../../../types/ISimilar";

interface FilmItemProps {
    item: ISimilar
}

export const SimilarItem: React.FC<FilmItemProps> = ({item}) => {

    return (
        <div className={styles.list_item}>
            <Link to={`/film/${item.filmId}`}>
                <img className={styles.image} src={item.posterUrl} alt={item.nameOriginal}/>
            </Link>
            <div className={styles.bottom}>
                <span className={styles.name}>{item.nameRu}</span>
            </div>
        </div>
    );
}