import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface UIButtonTypes {
    style?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<UIButtonTypes> = ({style, children, onClick}) => {
    return (
        <button onClick={onClick} className={cn(style, styles.button)}>
            {children}
        </button>
    );
}

