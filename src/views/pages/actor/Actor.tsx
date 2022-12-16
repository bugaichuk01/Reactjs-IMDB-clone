import React from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import styles from "./Actor.module.scss";
import {useGetActorQuery} from "_/serviceAPI";
import {Tabs} from "../../components/film/tabs/Tabs";
import {Detailed} from "../../components/film/detailed/Detailed";

export const Actor = () => {
    const params = useParams();
    const id = Number(params.id);
    const {data, isLoading} = useGetActorQuery(id);

    const {
        nameRu, nameEn, age, profession, growth, death, deathplace, birthday, birthplace, films, posterUrl, facts
    } = {...data}

    const items = [
        {caption: 'Возраст', value: age, condition: age},
        {caption: 'День рождения', value: birthday, condition: birthday},
        {caption: 'Место рождения', value: birthplace, condition: birthplace},
        {caption: 'Карьера', value: profession, condition: profession},
        {caption: 'Всего фильмов', value: films?.length, condition: films},
        {caption: 'Рост', value: growth, condition: growth},
        {caption: 'Дата смерти', value: death, condition: death},
        {caption: 'Место смерти', value: deathplace, condition: deathplace},
    ]

    const tabs = [
        {txt: 'Факты', content: facts?.map((fact: string, index: number) => <li className={styles.tab} key={index}>{fact}</li>)},
        {
            txt: 'Фильмы', content: films?.map((film: any, index: number) => (
                <li className={styles.tab} key={index}>
                    <Link to={`/film/${film.filmId}`}>
                        {film.nameRu ? film.nameRu : film.nameEn} {film.description ? `- ${film.description}` : null}
                        <span className={styles.rating}>{film.rating ? (` (${film.rating})`) : null}</span>
                    </Link>
                </li>
            ))
        }
    ]

    const actorName = nameRu ? nameRu : isLoading ? 'Загрузка' : 'Без имени';

    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>
                        {actorName}
                    </h1>
                    <div className={styles.nameEn}>
                        <span>{nameEn}</span>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <img className={styles.image} src={posterUrl} alt={nameEn}/>
                        </div>

                        <div className={styles.right}>
                            <h2 className={styles.subtitle}>
                                О персоне
                            </h2>
                            <Detailed items={items}/>
                        </div>
                    </div>
                </div>
                <Tabs tabs={tabs}/>
            </div>
        </>
    );
}