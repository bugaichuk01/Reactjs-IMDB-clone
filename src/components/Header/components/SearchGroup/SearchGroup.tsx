import React from 'react';
import styles from './SearchGroup.module.scss';
import DropDown from "../DropDown/DropDown";
import {SearchInput} from "../SearchInput/SearchInput";

export const SearchGroup = () => {

    return (
        <div className={styles.search_panel}>
            <DropDown />
            <SearchInput />
        </div>
    );
}
