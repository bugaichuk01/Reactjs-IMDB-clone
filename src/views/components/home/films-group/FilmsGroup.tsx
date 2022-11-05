import React from 'react';
import styles from './FilmsGroup.module.scss';
import {IMovie} from "../../../../types/IMovie";

interface FilmsGroupTypes {
    title: string;
    data: IMovie[] | undefined;
}

export const FilmsGroup: React.FC<FilmsGroupTypes> = ({data, title}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.films}>
                {data?.slice(0, 3).map((item, index) => (
                    <img key={index} src={item.posterUrl} alt={item.nameRu}/>
                ))}
            </div>
            <span className={styles.description}>{title}</span>
        </div>
    );
}