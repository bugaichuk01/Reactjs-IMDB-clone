import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../../_hooks/useTypedSelector";
import {useGetFilmsBySearchQuery} from "../../../../_services/serviceAPI";
import styles from './SearchList.module.scss';
import {IMovie} from "../../../../types/IMovie";
import {ListItem} from "../ListItem/ListItem";
import {Content} from "../../../Content/Content";

interface SearchListProps {
    debouncedValue: string
}

export const SearchList: React.FC<SearchListProps> = ({debouncedValue}) => {
    const {currentOption} = useTypedSelector(state => state.dropDownReducer);
    const {data, isFetching, isLoading, refetch} = useGetFilmsBySearchQuery({
        type: currentOption.value,
        keyword: debouncedValue
    });

    useEffect(() => {
        refetch();
    }, [debouncedValue, refetch])

    return (
        <div className={styles.search_list_container}>
            <div className={styles.search_list}>

                <Content items={data?.items} isLoading={isLoading} isFetching={isFetching}>
                    {data && data.items.slice(0, 8).map((item: IMovie) => (
                        <ListItem key={item.kinopoiskId} item={item}/>
                    ))}
                </Content>
            </div>
        </div>
    );
}
