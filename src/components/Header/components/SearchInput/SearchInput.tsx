import React, {useRef} from 'react';
import styles from './SearchInput.module.scss';
import useDebounce from "../../../../_hooks/useDebounce";
import {useTypedSelector} from "../../../../_hooks/useTypedSelector";
import {useActions} from "../../../../_hooks/useActions";
import {SearchList} from "../SearchList/SearchList";
import {useOnClickOutside} from "usehooks-ts";
import cn from "classnames";
import {FiX} from "react-icons/fi";

export const SearchInput = () => {
    const {setSearch, toggleSearch} = useActions();
    const {search, isOpen} = useTypedSelector(state => state.searchReducer);
    const debouncedValue = useDebounce(search.trim(), 300);

    const formRef = useRef<HTMLFormElement>(null);

    useOnClickOutside(formRef, () => toggleSearch(false))

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
            <form ref={formRef}>
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
            </form>
            {isActive && <SearchList debouncedValue={debouncedValue}/>}
        </>
    );
}