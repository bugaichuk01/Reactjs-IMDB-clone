import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface UIButtonTypes {
    text: string;
    style?: string;
}

export const Button: React.FC<UIButtonTypes> = ({text, style}) => {
    return (
        <button className={cn(styles.button, style)}>{text}</button>
    );
}

