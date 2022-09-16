import React from 'react';
import {useGetFilmByIdQuery} from "../../../_services/serviceAPI";
import {useParams} from "react-router";
import styles from './Film.module.scss';
import {convertMovieType} from "../../../_helpers/convertMovieType";
import {convertAgeLimit} from "../../../_helpers/convertAgeLimit";
import {Info} from "./components/Info/Info";
import {getTimeFromMinutes} from "../../../_helpers/getTimeFromMinutes";
import {EnumInfo} from "../../EnumInfo/EnumInfo";
import {Bookmark} from "../../FilmItem/components/Bookmark/Bookmark";
import {useGetBoxOffice} from "../../../_hooks/useGetBoxOffice";
import {capitalize} from "../../../_helpers/capitalize";
import {Rating} from "./components/Rating/Rating";

interface ElementTypes {
    value: string;
    id: number;
}

export const Element: React.FC<ElementTypes> = ({value, id}) => <React.Fragment>{id ? ', ' : ''}{value}</React.Fragment>

export const Film = () => {
    const {id} = useParams();
    const boxOffice = useGetBoxOffice(id);
    const {data, isLoading} = useGetFilmByIdQuery(id as string);

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
        ratingGoodReview
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

    const movieYear = year && `(${year})`;
    const movieTitle = nameRu ? nameRu : isLoading ? 'Загрузка' : 'Без названия';
    const totalItems = boxOffice && items.concat(boxOffice);

    return (
        <>
            <div className={styles.container}>
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
                        <Rating ratingKinopoisk={ratingKinopoisk} ratingImdb={ratingImdb} ratingGoodReview={ratingGoodReview} />
                        <Info items={totalItems}/>
                    </div>
                </div>
            </div>
        </>
    );
}