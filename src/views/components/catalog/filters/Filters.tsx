import React from 'react';
import {useActions} from "_/useActions";
import styles from './Filters.module.scss'
import {genres, orders, types} from "./filtersData";
import {useTypedSelector} from "_/useTypedSelector";
import {Input} from "@/shared-components/input/Input";
import {Select} from "@/shared-components/select/Select";

const Filters = () => {
    const {keyword} = useTypedSelector((state) => state.filtersReducer)
    const {setOrder, setType, setKeyword, setGenre} = useActions();

    return (
        <div className={styles.container}>
            <Input
                className={styles.search}
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}/>

            <Select
                className={styles.select}
                options={orders}
                onChange={(e) => setOrder(e)}
                value={orders[0]}/>

            <Select
                className={styles.select}
                options={types}
                onChange={(e) => setType(e)}
                value={types[0]}/>

            <Select
                className={styles.select}
                options={genres}
                onChange={(e) => setGenre(e)}
                value={genres[0]}/>
        </div>
    );
};

export default Filters;