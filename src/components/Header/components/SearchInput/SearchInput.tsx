import React, {useRef} from 'react';
import styles from './SearchInput.module.scss';
import useDebounce from "../../../../_hooks/useDebounce";
import {useTypedSelector} from "../../../../_hooks/useTypedSelector";
import {useActions} from "../../../../_hooks/useActions";
import {SearchList} from "../SearchList/SearchList";
import {useOnClickOutside} from "usehooks-ts";

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
            </form>
            {isActive && <SearchList debouncedValue={debouncedValue}/>}
            {/* <TextField
                    className={styles.search}
                    ref={inputRef}
                    variant='dark'
                    type="search"
                    value={value}
                    onChange={handleChange}
                    placeholder='Поиск...'
                    onClick={() => setVisible(true)}
                />
                <ButtonBase
                    ripple
                    type='button'
                    className={styles.hideSearch}
                    onClick={() => setVisible(false)}
                >
                    <FiChevronLeft />
                </ButtonBase>
                <ButtonBase
                    ripple
                    type='button'
                    className={classNames(styles.closeBtn, value && styles.active)}
                    onClick={handleClearInput}
                >
                    <FiX />
                </ButtonBase>
                <ButtonBase
                    ripple
                    className={styles.searchBtn}
                    disabled={!value.length}
                    onClick={submitForm}
                >
                    <FiSearch />
                </ButtonBase>
                {isActive && <SearchList value={debouncedValue} />}
            </form>
            <ButtonBase onClick={openSearch} className={styles.openSearch}>
                <FiSearch />
            </ButtonBase>*/}
        </>
    );
}