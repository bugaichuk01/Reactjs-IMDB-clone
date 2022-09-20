import React from "react";
import styles from './Info.module.scss'

type InfoItem = {
    caption: string;
    condition: unknown;
    value: React.ReactNode;
}

interface InfoTypes {
    items: InfoItem[] | undefined;
}

export const Info: React.FC<InfoTypes> = ({items}) => {

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