import React from "react";
import styles from './Detailed.module.scss'

type FilmInfoItem = {
    caption: string;
    condition: unknown;
    value: React.ReactNode;
}

interface FilmInfoTypes {
    items?: FilmInfoItem[];
}

export const Detailed: React.FC<FilmInfoTypes> = ({items}) => {

    return (
        <ul className='list'>
            {items?.map((el) => (
                <li key={el.caption} className={styles.item}>
                    <span className={styles.caption}>{el.caption}</span>
                    {el.condition ? (
                        <span className={styles.value}>{el.value}</span>
                    ) : (
                        '—'
                    )}
                </li>
            ))}
        </ul>
    )
}