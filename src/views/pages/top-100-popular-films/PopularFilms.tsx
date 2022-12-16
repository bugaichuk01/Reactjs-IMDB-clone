import React, {useEffect} from 'react';
import {useGetTopPopularFilmsQuery} from '_/serviceAPI';
import {useTypedSelector} from "_/useTypedSelector";
import {useActions} from "_/useActions";
import {SelectionTemplate} from "@/layout-components/selection-template/SelectionTemplate";

export const PopularFilms = () => {
    const {page} = useTypedSelector((state) => state.paginationReducer);
    const {setPage} = useActions();

    useEffect(() => {
        setPage(1)
    }, [])


    const {data, isLoading, isFetching} = useGetTopPopularFilmsQuery(page);

    return (
        <>
            <SelectionTemplate
                page={page}
                setPage={setPage}
                title={'Топ 100 популярных фильмов'}
                info={'Рейтинг составлен на основе посещаемости страниц фильмов, а также запросов к поисковой системе сайта. Список обновляется один раз в сутки.'}
                data={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </>

    );
};

