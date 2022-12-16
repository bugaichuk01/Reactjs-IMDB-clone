import React, {ChangeEvent, MouseEventHandler} from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

interface IInput {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: MouseEventHandler<HTMLInputElement>;
    className?: string;
    value: string;
}

export const Input: React.FC<IInput> = ({onChange, onClick, value, className}) => {
    return (
        <input
            value={value}
            onClick={onClick}
            onChange={onChange}
            className={cn(styles.input, className)}
            placeholder={'Поиск...'}
            type="text"
        />
    );
};

