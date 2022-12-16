import React, {useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import styles from './SearchList.module.scss';
import {useOnClickOutside} from "usehooks-ts";
import {useActions} from "_/useActions";
import {useTypedSelector} from "_/useTypedSelector";
import {useGetFilmsBySearchQuery} from "_/serviceAPI";
import {IFilm} from "../../../../../types/IFilm";
import {ListItem} from "../list-item/ListItem";
import {Content} from "../../../content/Content";

interface SearchListProps {
    debouncedValue: string
}

export const SearchList: React.FC<SearchListProps> = ({debouncedValue}) => {
    const {toggleSearch} = useActions();
    const {currentOption} = useTypedSelector(state => state.dropDownReducer);

    const {data, isFetching, isLoading, refetch} = useGetFilmsBySearchQuery({
        type: currentOption.value,
        keyword: debouncedValue
    }, {skip: debouncedValue.length < 3});

    const divRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(divRef, () => toggleSearch(false))

    useEffect(() => {
        refetch();
    }, [debouncedValue, refetch])

    return (
        <div ref={divRef} className={styles.search_list_container}>
                <Content data={data?.items} isLoading={isLoading} isFetching={isFetching}>
                    {data?.items?.slice(0, 8).map((item: IFilm) => (
                        <Link to={`film/${item.kinopoiskId}`} key={item.kinopoiskId} onClick={() =>toggleSearch(false)}>
                            <ListItem item={item}/>
                        </Link>
                    ))}
                </Content>
        </div>
    );
}
