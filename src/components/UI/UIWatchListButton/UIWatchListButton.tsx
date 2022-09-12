import React from 'react';
import styles from './UIWatchListButton.module.scss';
import cn from 'classnames';
import {BsPlusLg} from "react-icons/bs";

interface UIButtonTypes {
    style?: string;
}

export const UIWatchListButton: React.FC<UIButtonTypes> = ({style}) => {
    return (
        <button className={cn(styles.button, style)}>
            <BsPlusLg className={styles.icon} />
            Буду смотреть
        </button>
    );
}

