import React, {useEffect} from 'react';
import {useActions} from "_/useActions";
import {useTypedSelector} from "_/useTypedSelector";
import {useGetTopAwaitFilmsQuery} from '_/serviceAPI';
import {SelectionTemplate} from "@/layout-components/selection-template/SelectionTemplate";

export const AwaitFilms = () => {
    const {page} = useTypedSelector((state) => state.paginationReducer);
    const {setPage} = useActions();

    useEffect(() => {
        setPage(1)
    }, [])


    const {data, isLoading, isFetching} = useGetTopAwaitFilmsQuery(page);

    return (
        <>
            <SelectionTemplate
                page={page}
                setPage={setPage}
                title={'Топ ожидаемых фильмов'}
                info={'Рейтинг составлен на основе пользовательских голосов, любой зарегистрированный посетитель сайта может легко принять в нём участие.'}
                data={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </>

    );
};

