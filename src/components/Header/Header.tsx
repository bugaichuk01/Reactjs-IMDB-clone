import React from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import {Logo} from "./components/Logo/Logo";
import {SearchGroup} from "./components/SearchGroup/SearchGroup";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={cn('container', styles.container)}>
                <Logo />
                <SearchGroup />
            </div>
        </header>
    );
}