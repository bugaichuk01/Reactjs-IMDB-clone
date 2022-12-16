import React from 'react';
import converter from '_/converters';
import styles from "./ListItem.module.scss";
import {IFilm} from "../../../../../types/IFilm";

interface ListIteProps {
    item: IFilm
}

export const ListItem: React.FC<ListIteProps> = ({item}) => {
    return (
        <div className={styles.list_container}>
            <div className={styles.image_container}>
                <img src={item.posterUrl}  alt={item.nameRu}/>
            </div>
            <div className={styles.description}>
                <span className={styles.title}>{item.nameRu}</span>
                <span className={styles.info}>{item.year}</span>
                <div>
                    {item.genres.map((genre, index, genres) => (
                        <span key={index} className={styles.info}>
                            {converter.convertFirstLetter(genre.genre)}{index !== (genres.length - 1) ? ', ' : ''}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}