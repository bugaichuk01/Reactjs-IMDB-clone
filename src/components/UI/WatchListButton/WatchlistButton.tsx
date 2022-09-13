import React from 'react';
import cn from 'classnames';
import styles from './WatchlistButton.module.scss';
import {BsPlusLg} from "react-icons/bs";

interface UIButtonTypes {
    style?: string;
}

export const WatchlistButton: React.FC<UIButtonTypes> = ({style}) => {
    return (
        <button className={cn(styles.button, style)}>
            <BsPlusLg className={styles.icon} />
            Буду смотреть
        </button>
    );
}

