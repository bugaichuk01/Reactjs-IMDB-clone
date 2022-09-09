import React from 'react';
import styles from './UIButton.module.scss';
import cn from 'classnames';

interface UIButtonTypes {
    text: string;
    style?: string;
}

export const UiButton: React.FC<UIButtonTypes> = ({text, style}) => {
    return (
        <button className={cn(styles.button, style)}>{text}</button>
    );
}

