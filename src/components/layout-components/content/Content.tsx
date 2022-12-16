import React, {PropsWithChildren} from 'react';
import styles from './Content.module.scss';
import ReactLoading from "react-loading";
import {IFact} from "../../../types/IFact";
import {IFilm} from "../../../types/IFilm";
import {IReview} from "../../../types/IReview";
import {IFilmTop} from "../../../types/IFilmTop";

type Items = IFilm[] | IFact[] | IReview[] | IFilmTop[];

interface ContentTypes<T> {
    data?: T;
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

export const Content: React.FC<ContentTypes<Items>> = ({data, children, isLoading, isFetching}) => {
    return (
        <>
            {isLoading || isFetching ? <Loader/> : !data?.length ? <Error>Ничего не найдено!</Error> : children}
        </>
    );
}

