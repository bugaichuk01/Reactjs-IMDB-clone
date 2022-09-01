import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../../_hooks/useTypedSelector";
import {useGetFilmsBySearchQuery} from "../../../../_services/serviceAPI";
import styles from './SearchList.module.scss';
import {IMovie} from "../../../../_types/IMovie";
import {ListItem} from "../ListItem/ListItem";

interface SearchListProps {
    debouncedValue: string
}

export const SearchList: React.FC<SearchListProps> = ({debouncedValue}) => {
    const {currentOption} = useTypedSelector(state => state.dropDownReducer);
    const {data, isFetching, refetch} = useGetFilmsBySearchQuery({type: currentOption.value, keyword: debouncedValue});

    useEffect(() => {
        refetch();
    }, [debouncedValue])

    return (
        <div className={styles.search_list_container}>
            <div className={styles.search_list}>
                {!isFetching ? (
                    <>
                        {data?.items?.length ? (
                            <>
                                {data && data.items.slice(0, 8).map((item: IMovie) => (
                                    <ListItem key={item.kinopoiskId} item={item}/>
                                ))}
                            </>
                        ) : (
                            <div className={styles.loader}>
                                loading
                                {/*<Spinner variant='dark' size={SpinnerSizes.medium}/>*/}
                            </div>
                        )}
                    </>
                ) : (
                    <p className={styles.no_results}>По вашему запросу ничего не найдено</p>
                )}
            </div>
        </div>
    );
}
