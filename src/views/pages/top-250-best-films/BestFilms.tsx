import React, {useEffect} from 'react';
import {useGetBestFilmsQuery} from '_/serviceAPI';
import {useTypedSelector} from "_/useTypedSelector";
import {useActions} from "_/useActions";
import {SelectionTemplate} from "@/layout-components/selection-template/SelectionTemplate";

export const BestFilms = () => {
    const {page} = useTypedSelector((state) => state.paginationReducer);
    const {setPage} = useActions();

    useEffect(() => {
        setPage(1)
    }, [])


    const {data, isLoading, isFetching} = useGetBestFilmsQuery(page);

    return (
        <>
            <SelectionTemplate
                page={page}
                setPage={setPage}
                title={'Топ 250 лучших фильмов'}
                info={'Рейтинг составлен по результатам голосования посетителей сайта. Любой желающий может принять в нем участие, проголосовав за свой любимый фильм.'}
                data={data}
                isLoading={isLoading}
                isFetching={isFetching}
            />
        </>

    );
};

