import React from 'react';
import cn from 'classnames';
import styles from './SelectionTemplate.module.scss';
import {IFilmTopResponse} from "../../../types/Responses";
import {Content} from "@/layout-components/content/Content";
import {Caption} from "@/shared-components/caption/Caption";
import {Paginate} from "@/shared-components/paginate/Paginate";
import {PopularItem} from "../../../views/components/populars/PopularItem";

interface ICatalog {
    title: string;
    info: string;
    isFetching: boolean;
    isLoading: boolean;
    data?: IFilmTopResponse;
    page: number;
    setPage: (page: number) => void;
}

export const SelectionTemplate: React.FC<ICatalog> = ({title, info, data, isFetching, isLoading, page, setPage}) => {

    return (
        <div className={styles.catalog}>
            <div className={cn('container', styles.container)}>
                <Caption description={title} info={info}/>

                {data && (
                    <>
                        <Content data={data?.films} isFetching={isFetching} isLoading={isLoading}>
                            <div className={styles.grid}>
                                {data?.films?.map((item) => (
                                    <PopularItem key={item.filmId} item={item}/>
                                ))}
                            </div>
                        </Content>
                        <Paginate page={page} setPage={setPage} totalPages={data?.pagesCount}/>
                    </>
                )}

            </div>
        </div>
    );
};