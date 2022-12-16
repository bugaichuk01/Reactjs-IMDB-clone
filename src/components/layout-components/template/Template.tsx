import React from 'react';
import styles from './Template.module.scss';
import cn from 'classnames';
import {IFilm} from "../../../types/IFilm";
import {IBaseResponse} from "../../../types/Responses";
import {Content} from "@/layout-components/content/Content";
import {Paginate} from "@/shared-components/paginate/Paginate";
import {Item} from "../../../views/components/catalog/item/Item";
import {Caption} from "@/shared-components/caption/Caption";
import Filters from "../../../views/components/catalog/filters/Filters";

interface ICatalog {
    title: string;
    info: string;
    isFetching: boolean;
    isLoading: boolean;
    data?: IBaseResponse<IFilm>;
    page: number;
    setPage: (page: number) => void;
}

export const Template: React.FC<ICatalog> = ({title, info, data, isFetching, isLoading, page, setPage}) => {
    return (
        <div className={styles.catalog}>
            <div className={cn('container', styles.container)}>
                <Caption description={title} info={info}/>

                {data && (
                    <>
                        <div className={styles.body}>
                            <Filters/>
                            <Content data={data?.items} isFetching={isFetching} isLoading={isLoading}>
                                <div className={styles.grid}>
                                    {data?.items?.map((item) => (
                                        <Item key={item.kinopoiskId} item={item}/>
                                    ))}
                                </div>
                            </Content>
                        </div>
                        <Paginate page={page} setPage={setPage} totalPages={data?.totalPages}/>
                    </>
                )}

            </div>
        </div>
    );
};

