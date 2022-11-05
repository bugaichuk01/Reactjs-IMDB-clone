import React from 'react';
import styles from './ActorItem.module.scss'
import {IStaff} from "../../../../types/IStaff";

interface ActorItemProps {
    item: IStaff;
}

export const ActorItem: React.FC<ActorItemProps> = ({item}) => {

    return (
        <div className={styles.list_item}>
            <img className={styles.image} src={item.posterUrl} alt={item.nameRu}/>
            <div className={styles.bottom}>
                <span className={styles.name}>{item.nameRu}</span>
                <span className={styles.desc}>{item.description}</span>
            </div>
        </div>
    );
}