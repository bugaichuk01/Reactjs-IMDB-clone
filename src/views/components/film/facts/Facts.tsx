import styles from './Facts.module.scss';
import React from "react";
import {useGetFactsQuery} from "_/serviceAPI";
import {IFact} from "../../../../types/IFact";
import {Content} from "@/layout-components/content/Content";

interface FilmFactsProps {
    filmId?: number;
}

export const Facts: React.FC<FilmFactsProps> = (({filmId}) => {
    const {data, isLoading, isFetching} = useGetFactsQuery(filmId)

    return (
        <Content data={data?.items} isLoading={isLoading} isFetching={isFetching}>
            <ul className={styles.facts}>
                {data?.items?.map((el: IFact) => <li key={el.text} className={styles.item} dangerouslySetInnerHTML={{__html: el.text}} />)}
            </ul>
        </Content>
    )
})