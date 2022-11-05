import React from 'react';
import DropDown from "../dropdown/DropDown";
import styles from './SearchGroup.module.scss';
import {SearchInput} from "../search-input/SearchInput";

export const SearchGroup = () => {

    return (
        <div className={styles.search_group}>
            <DropDown />
            <SearchInput />
        </div>
    );
}
