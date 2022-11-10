import React from 'react';
import styles from "./Caption.module.scss";

interface FilmsTitleTypes {
    title?: string;
    description?: string | JSX.Element;
    info?: string;
}

export const Caption: React.FC<FilmsTitleTypes> = ({title, description, info}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.editors_pick}>{description}</h3>
            <h3 className={styles.title_info }>{info}</h3>
        </div>
    );
}
