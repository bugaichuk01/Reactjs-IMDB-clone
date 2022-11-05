import styles from './Facts.module.scss';
import React from "react";
import {useGetFactsQuery} from "_/serviceAPI";
import {IFact} from "../../../../types/IFact";

interface FilmFactsProps {
    filmId: number | undefined;
}

export const Facts: React.FC<FilmFactsProps> = (({filmId}) => {
    const {data} = useGetFactsQuery(filmId)

    return (
        <>
            <ul className={styles.facts}>
                {data?.items.map((el: IFact) => <li key={el.text} className={styles.item} dangerouslySetInnerHTML={{__html: el.text}} />)}
            </ul>
        </>
    )
})