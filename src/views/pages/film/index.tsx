import React from 'react';
import {useParams} from "react-router";
import styles from "./Film.module.scss";
import converter from "_/converters";
import {useGetFilmByIdQuery} from "_/serviceAPI";
import {useGetBoxOffice} from "_/useGetBoxOffice";
import {getTimeFromMinutes} from "_/getTimeFromMinutes";
import {Tabs} from "../../components/film/tabs/Tabs";
import {Facts} from "../../components/film/facts/Facts";
import {Actors} from "../../components/film/actors/Actors";
import {Rating} from "../../components/film/rating/Rating";
import {Similar} from "../../components/film/similar/Similar";
import {Reviews} from "../../components/film/reviews/Reviews";
import {FilmInfo} from "../../components/film/film-info/FilmInfo";
import {Bookmark} from "@/shared-components/bookmark/Bookmark";
import {EnumInfo} from "@/shared-components/enum-info/EnumInfo";

interface ElementTypes {
    value: string;
    id: number;
}

export const Element: React.FC<ElementTypes> = ({value, id}) => <React.Fragment>{id ? ', ' : ''}{value}</React.Fragment>

export const Film = () => {
    const params = useParams();
    const id = Number(params.id);

    const boxOffice = useGetBoxOffice(id);
    const {data, isLoading} = useGetFilmByIdQuery(id);

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
            value: countries?.map((el, id) => <Element value={el.country} key={id} id={id}/>),
            condition: countries?.length
        },
        {
            caption: 'Жанр',
            value: genres?.map((el, id) => <Element value={converter.convertFirstLetter(el.genre)} key={id} id={id}/>),
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
                            {year && <li>{year}</li>}
                            {filmLength && <li>{getTimeFromMinutes(filmLength)}</li>}
                            {ratingAgeLimits && <li>{converter.convertAgeLimit(ratingAgeLimits)}</li>}
                        </EnumInfo>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <Bookmark/>
                            <img className={styles.image} src={posterUrl} alt={nameOriginal}/>
                        </div>

                        <div className={styles.right}>
                            <h2 className={styles.subtitle}>
                                О {converter.convertMovieType(type)}е
                            </h2>
                            <Rating ratingKinopoisk={ratingKinopoisk} ratingImdb={ratingImdb}
                                    ratingGoodReview={ratingGoodReview}/>
                            <FilmInfo items={totalItems}/>
                        </div>
                    </div>
                </div>
                <Tabs tabs={tabs}/>
                <Similar id={id} />
                <Reviews id={id} />
            </div>
        </>
    );
}