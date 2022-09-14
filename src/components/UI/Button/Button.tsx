import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface UIButtonTypes {
    style?: string;
    children: React.ReactNode
}

export const Button: React.FC<UIButtonTypes> = ({style, children}) => {
    return (
        <button className={cn(styles.button, style)}>
            {children}
        </button>
    );
}

