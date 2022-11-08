import React, {PropsWithChildren} from 'react';
import styles from './Content.module.scss';
import ReactLoading from "react-loading";
import {IMovie} from "../../../types/IMovie";
import {IBaseQuery} from "../../../types/IQuery";
import {IFact} from "../../../types/IFact";
import {IReview} from "../../../types/IReview";

type Items =  IMovie | IFact | IReview;

interface ContentTypes<T> {
    data: T | undefined;
    children: React.ReactNode;
    isLoading?: boolean;
    isFetching?: boolean;
}

export const Loader = () => {
    return (
        <div className={styles.spinner}>
            <ReactLoading className={styles.loader} type='spin' height={40} width={40}/>
        </div>
    )
}

export const Error = ({children}: PropsWithChildren<{}>) => <p className={styles.no_results}>{children}</p>

export const Content: React.FC<ContentTypes<IBaseQuery<Items>>> = ({data, children, isLoading, isFetching}) => {
    return (
        <>
            {isLoading || isFetching ? <Loader/> : (
                <div className={styles.content}>
                    {!data?.[data.items ? 'items' : 'films']?.length ? <Error>Ничего не найдено!</Error> : children}
                </div>
            )}
        </>
    );
}

