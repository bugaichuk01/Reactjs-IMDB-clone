import React, {MouseEventHandler} from 'react';
import styles from './Info.module.scss';
import {BiInfoCircle} from "react-icons/bi";

interface InfoTypes {
    onClick: MouseEventHandler<HTMLDivElement>;
}

export const Info: React.FC<InfoTypes> = ({onClick}) => {
    return (
        <div className={styles.info_btn} onClick={onClick}>
            <BiInfoCircle />
        </div>
    );
}

