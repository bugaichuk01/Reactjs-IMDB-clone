import React from 'react';
import {BsPlusLg} from "react-icons/bs";
import styles from './WatchlistButton.module.scss';
import {Button} from "@/shared-components/button/Button";

export const WatchlistButton = () => {
    return (
        <Button style={styles.watchlist_btn}>
            <BsPlusLg/>
            Буду смотреть
        </Button>
    );
};
