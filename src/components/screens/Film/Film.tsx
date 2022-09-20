import React from 'react';
import styles from './Film.module.scss';
import {useParams} from "react-router";
import {useGetBoxOffice} from "../../../_hooks/useGetBoxOffice";
import {useGetFilmByIdQuery} from "../../../_services/serviceAPI";
import {capitalize} from "../../../_helpers/capitalize";
import {convertAgeLimit} from "../../../_helpers/convertAgeLimit";
import {convertMovieType} from "../../../_helpers/convertMovieType";
import {getTimeFromMinutes} from "../../../_helpers/getTimeFromMinutes";
import {Info} from "./components/Info/Info";
import {EnumInfo} from "../../EnumInfo/EnumInfo";
import {Rating} from "./components/Rating/Rating";
import {Bookmark} from "../../FilmItem/components/Bookmark/Bookmark";
import {Tabs} from "../../Tabs/Tabs";
import {Similar} from "./components/Similar/Similar";
import {Actors} from "./components/Actors/Actors";
import {Facts} from "./components/Facts/Facts";

interface ElementTypes {
    value: string;
    id: number | undefined;
}

export const Element: React.FC<ElementTypes> = ({value, id}) => <React.Fragment>{id ? ', ' : ''}{value}</React.Fragment>

export const Film = () => {
    const {id} = useParams();
    const boxOffice = useGetBoxOffice(Number(id));
    const {data, isLoading} = useGetFilmByIdQuery(Number(id));

    const {
        countries,
        genres,
        slogan,
        nameOriginal,
        nameRu,
        type,
        year,
        filmLength,
        ratingAgeLimits,
        posterUrl,
        ratingKinopoisk,
        ratingImdb,
        ratingGoodReview,
        description
    } = {...data}

    const items = [
        {
            caption: 'Страны',
            value: countries?.map((el, idx) => <Element value={el.country} key={idx} id={idx}/>),
            condition: countries?.length
        },
        {
            caption: 'Жанр',
            value: genres?.map((el, idx) => <Element value={capitalize(el.genre)} key={idx} id={idx}/>),
            condition: genres?.length
        },
        {caption: 'Слоган', value: slogan, condition: slogan},
    ]

    const tabs = [
        {txt: 'Описание', content: <p className={styles.desc}>{description}</p>, condition: description?.length},
        {txt: 'Актёры', content: <Actors filmId={data?.kinopoiskId}/>},
        {txt: 'Факты', content: <Facts filmId={data?.kinopoiskId}/>}
    ]

    const movieYear = year && `(${year})`;
    const movieTitle = nameRu ? nameRu : isLoading ? 'Загрузка' : 'Без названия';
    const totalItems = boxOffice && [...items, ...boxOffice];

    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>
                        {movieTitle} {movieYear}
                    </h1>
                    <div className={styles.originalTitle}>
                        <span>Original title: {nameOriginal}</span>
                        <EnumInfo>
                            <li>{year}</li>
                            <li>{getTimeFromMinutes(filmLength)}</li>
                            <li>{convertAgeLimit(ratingAgeLimits)}</li>
                        </EnumInfo>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <Bookmark/>
                            <img className={styles.image} src={posterUrl} alt={nameOriginal}/>
                        </div>

                        <div className={styles.right}>
                            <h2 className={styles.subtitle}>
                                О {convertMovieType(type)}е
                            </h2>
                            <Rating ratingKinopoisk={ratingKinopoisk} ratingImdb={ratingImdb}
                                    ratingGoodReview={ratingGoodReview}/>
                            <Info items={totalItems}/>
                        </div>
                    </div>
                </div>
                <Tabs tabs={tabs}/>
                <Similar id={data?.kinopoiskId} />
            </div>
        </>
    );
}