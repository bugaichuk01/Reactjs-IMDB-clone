import React from 'react';
import cn from "classnames";
import {FiX} from "react-icons/fi";
import styles from './SearchInput.module.scss';
import {SearchList} from "../search-list/SearchList";
import useDebounce from "_/useDebounce";
import {useActions} from "_/useActions";
import {useTypedSelector} from "_/useTypedSelector";

export const SearchInput = () => {
    const {setSearch, toggleSearch} = useActions();
    const {search, isOpen} = useTypedSelector(state => state.searchReducer);
    const debouncedValue = useDebounce(search.trim(), 300);
    const handleSearch = () => {
        toggleSearch(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        handleSearch();
    }

    const handleClearInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearch('');
    }
    const isActive = isOpen && debouncedValue;

    return (
        <>
            <input
                value={search}
                onChange={handleChange}
                type="search"
                className={styles.search}
                placeholder='Поиск...'
                onClick={handleSearch}
            />
                 <button
                    className={cn(styles.closeBtn, debouncedValue && styles.active)}
                    onClick={handleClearInput}
                >
                    <FiX />
                </button>
            {isActive && <SearchList debouncedValue={debouncedValue}/>}
        </>
    );
}