import React from 'react';
import styles from "./FilmsTitle.module.scss";

interface FilmsTitleTypes {
    title: string;
    description: string;
    info?: string;
}

export const FilmsTitle: React.FC<FilmsTitleTypes> = ({title, description, info}) => {
    return (
        <div className={styles.main}>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.editors_pick}>{description}</h3>
            <h3 className={styles.title_info }>{info}</h3>
        </div>
    );
}
