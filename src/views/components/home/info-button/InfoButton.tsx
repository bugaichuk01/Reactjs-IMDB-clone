import React, {MouseEventHandler} from 'react';
import styles from './InfoButton.module.scss';
import {BiInfoCircle} from "react-icons/bi";

interface InfoButtonTypes {
    onClick: MouseEventHandler<HTMLDivElement>;
}

export const InfoButton: React.FC<InfoButtonTypes> = ({onClick}) => {
    return (
        <div className={styles.info_btn} onClick={onClick}>
            <BiInfoCircle />
        </div>
    );
}

